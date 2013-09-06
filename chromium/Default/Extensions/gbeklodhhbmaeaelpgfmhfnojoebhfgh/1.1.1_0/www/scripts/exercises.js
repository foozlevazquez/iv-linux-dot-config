var Exercises = {
    version: "1.1.0",
    words: [
        "acorn","alphabet","anchor","apple","arrow","axe",
        "bag","ball","balloon","banana","bell","bicycle","boat","bone","book","boots","bottle","bridge","brush","bucket","butterfly",
        "cake","camera","car","carrot","castle","cat","chain","chair","clock","cloud","clown","crab","crayon","crown","cup",
        "dice","dish","door","drink","dragonfly","drum","duck",
        "ears","earth","egg","eye",
        "feather","fence","fish","flower","foot","fork","frog",
        "gate","goat","grapes","guitar",
        "hammer","hat","helicopter","horse","house",
        "icicle","igloo","ink","iron",
        "jam","jar","jewel","jigsaw",
        "key","king","kite","knee",
        "ladder","ladybird","leaf","lemon","lion","lips",
        "magnet","map","mask","mat","maze","monkey","moon","mouse","mug",
        "nail","nest","net","nose","notebook",
        "oar","octopus","onion","orange",
        "parrot","pear","peg","pen","pencil","plate","pumpkin",
        "quilt",
        "rabbit","rainbow","ring","ruler",
        "saw","scarf","sheep","shell","ship","shoe","shop","sledge","snail","snake","snowman","spoon","stairs","square","star","sun","sunglasses",
        "table","tent","tie","tractor","train","tree","triangle",
        "umbrella",
        "van","vase","volcano",
        "wasp","watch","web","wheel","windmill","witch","wood","wool",
        "yellow",
        "zebra"
    ],
    types: [
        {
            label: "Missing First Letter",
            position: "first",
            marks: []
        },
        {
            label: "Select a Vowel",
            chars: ["a","e","i","o","u"],
            marks: []
        },
        {
            label: "Missing Last Letter",
            position: "last",
            marks: []
        },
        {
            label: "cr, cl, ch and ck",
            chars: ["cr","cl","ch","ck"],
            marks: []
        },
        {
            label: "oa, oo, or, ou and ow",
            chars: ["oa","oo","or","ou","ow"],
            marks: []
        },
        {
            label: "sp, sh and st",
            chars: ["sp","sh","st"],
            marks: []
        },
        {
            label: "ee, ea & ai",
            chars: ["ee","ea","ai"],
            marks: []
        },
        {
            label: "er & ar",
            chars: ["er","ar"],
            marks: []
        }
    ],
    dogAnimations: ["1","2","3","4"],
    start: function () {
        Exercises.wordLength = 100;
        Exercises.prepareExerciseQuestions();
        Exercises.activeExcercise = Exercises.types [0];
        document.getElementById("exerciseTitle").innerHTML = Exercises.activeExcercise.label;
        //Exercises.showNextWord();

        // fill in the table of marks
        var marksTable = document.getElementById("markstable").getElementsByTagName("tbody") [0];
        for (var i = 0; i < Exercises.types.length; i++) {
            var row = document.createElement("tr");
            row.className = (i %2 == 0 ? "odd" : "even");
            var labelCell = document.createElement("td");
            labelCell.className = "marklabel";
            labelCell.innerHTML = Exercises.types [i].label;
            row.appendChild(labelCell);
            for (var c = 0; c < 3; c++) {
                var cell = document.createElement("td");
                cell.className = "mark";
                cell.innerHTML = "0";
                row.appendChild(cell);
            }
            marksTable.appendChild(row);
        }

        // fill in about screen if not yet filled in
        var aboutVersion = document.getElementById("aboutVersion");
        if (aboutVersion.innerHTML == null || aboutVersion.innerHTML.length <= 0) {
            aboutVersion.innerHTML = "Version: " + Exercises.version;
        }
        
        Exercises.preloadAnimations();
        Exercises.playAnimation(Exercises.animations[4]);

    },
    
    animations: [
                 {
                	name: "dogAnimation1",
                	filename: "images/compass_anim0-",
                	numFrames: 10,
                	frameDelays: [ 150 ],
                	currentframe: 0
                 },
                 {
                 	name: "dogAnimation2",
                 	filename: "images/compass_anim1-",
                 	numFrames: 8,
                 	frameDelays: [ 150 ],
                	currentframe: 0
                  },
                  {
                  	name: "dogAnimation3",
                  	filename: "images/compass_anim2-",
                  	numFrames: 8,
                  	frameDelays: [ 150 ],
                	currentframe: 0
                   },
                   {
                   	name: "dogAnimation4",
                   	filename: "images/compass_anim3-",
                   	numFrames: 19,
                   	frameDelays: [ 150 ],
                	currentframe: 0
                    },
                    {
                    name: "homeSmudge",
                    filename: "images/smudge_fidget-",
                    numFrames: 18,
                    frameDelays: [1000,100,100,100,100,100,100,100,100,200,70,70,70,70,70,100,70,100],
                    currentframe: 0
                    },
                    {
                    name: "dog",
                    filename: "images/smudge_fidget_flipped-",
                    numFrames: 18,
                    frameDelays: [1000,100,100,100,100,100,100,100,100,200,70,70,70,70,70,100,70,100],
                    currentframe: 0
                    }
    ],
    
    preloadAnimations: function() {
    	var a = 0, i = 0;
    	
    	for (a=0; a<Exercises.animations.length; a++) {
    		var filename = Exercises.animations[a].filename;
    		var numframes = Exercises.animations[a].numFrames;
    		
    		for (i=0; i<numframes; i++) {
    			var im = document.createElement("img");
    			im.id=Exercises.animations[a].name+":"+i;
    			im.src = ""+filename+""+i+".png";
    			im.style.display = "none";
    			document.body.appendChild(im);
    		}
    	}
    },
    
    stopPlayingAnimation: false,
    playAnimation: function(anim) {
    	if (anim == null) return;
    	
    	
    	var name = anim.name;
    	//alert(name);
    	
    	if (name=="dog" || name == "homeSmudge") {
    		var d = document.getElementById(name);
    		if (d.style.display == "none") return;
    	}
    	var nextframedelay =anim.frameDelays[0];
    	if (anim.frameDelays.length>1) nextframedelay=anim.frameDelays[anim.currentframe];
    	
    	
    	$("#" + name).show();
    	
    	setTimeout(function () {
    		var picid = name +":"+anim.currentframe;
    		//alert("picid:"+picid);
    		
    		var d = document.getElementById(picid);
    		if (d==null) alert("is null");
    		//alert(document.getElementById(name).src);
    		document.getElementById(name).src = d.src;
    		//$("#" + name).attr.src = $("#" + name +":"+anim.currentframe).attr.src;
    		
    		//alert("src:"+$("#" + name +":"+anim.currentframe).attr.src);
    		anim.currentframe++;
    		if (anim.currentframe==anim.numFrames) anim.currentframe=0;
    		if (!Exercises.stopPlayingAnimation || anim.frameDelays.length>1) Exercises.playAnimation(anim);
        }, nextframedelay);
    },
    
    prepareExerciseQuestions: function () {
        for (var i = 0; i < Exercises.types.length; i++) {
            var exercise = Exercises.types [i];
            var words = exercise.words;
            var chars = exercise.chars;
            if (chars != null) {
                words = [];
                for (var j = 0; j < Exercises.words.length; j++) {
                    var word = Exercises.words [j];
                    if (chars != null) {
                        for (var k = 0; k < chars.length; k++) {
                            if (word.indexOf(chars [k]) >= 0 && word.length <= Exercises.wordLength) {
                                words.push(word);
                            }
                        }
                    }
                }
            } else {
                if (exercise == Exercises.types [0] || exercise == Exercises.types [2]) {
                    // Missing first letter
                    words = [];
                    for (var j = 0; j < Exercises.words.length; j++) {
                        if (Exercises.words [j].length <= Exercises.wordLength) {
                            words.push(Exercises.words [j]);
                        }
                    }
                }
            }

            // randomize words
            words.sort(function () {
                return (Math.round(Math.random()) - 0.5);
            });

            // cache the words
            exercise.words = words;
        }
    },
    showNextWord: function () {
        var answer = Exercises.getNextWord();
        Exercises.answer = answer;
        document.getElementById("answerImage").src = "images/" + answer + ".png";
        document.getElementById("answer").innerHTML = answer;

        var soundButton = document.getElementById("soundButton");
        soundButton.soundSrc = "sounds/" + answer.toUpperCase() + ".mp3";
        Exercises.playSound(document.getElementById("soundButton").soundSrc);

        var chars = Exercises.activeExcercise.chars;
        var numberOfChoises = 5;
        var nextQuestion = null;
        if (chars != null) {
            numberOfChoises = chars.length;
            for (var i = 0; i < chars.length; i++) {
                if (answer.indexOf(chars [i]) >= 0) {
                    var placeholders = "";
                    for (var p = 0; p < chars [i].length; p++) {
                        placeholders += "-";
                    }
                    nextQuestion = answer.replace(chars [i], placeholders);
                    break;
                }
            }
        } else {
            chars = [];
            if (Exercises.activeExcercise.position == "first") {
                nextQuestion = "-" + answer.substr(1);
                chars.push(answer.charAt(0));
            } else {
                nextQuestion = answer.substr(0, answer.length - 1) + "-";
                chars.push(answer.charAt(answer.length - 1));
            }
            // find 4 random characters (without doubles)
            for (var i = 0; i < 4; i++) {
                var nextChar = null;
                do {
                    nextChar = String.fromCharCode("a".charCodeAt(0) + Math.floor(Math.random() * 26));
                } while (chars.join("").indexOf(nextChar) >= 0);
                chars.push(nextChar);
            }
            // randomize chars
            chars.sort(function () {
                return (Math.round(Math.random()) - 0.5);
            });

            Exercises.activeExcercise.chars = chars;
            chars = null;
        }
        Exercises.question = nextQuestion;
        Exercises.showQuestionAndAnswers();
        Exercises.changeBackground(numberOfChoises);

        // clean up random chars
        // this is the case in the Missing first/last letter
        if (chars == null) {
            delete Exercises.activeExcercise.chars;
        }


        // strange bug: the question and answers are sometimes empty??
        if (document.getElementById("question").innerHTML == null || document.getElementById("question").innerHTML == "") {
            setTimeout(Exercises.showNextWord, 100);
        }
    },
    getNextWord: function () {
        var exercise = Exercises.activeExcercise;
        var words = exercise.words;

        var activeWordIndex = exercise.activeWordIndex;
        if (activeWordIndex == null || activeWordIndex + 1 == words.length) {
            activeWordIndex = 0;
        } else {
            activeWordIndex++;
        }
        exercise.activeWordIndex = activeWordIndex;

        // prepare next image
        if (activeWordIndex + 1 < words.length) {
            document.getElementById("cacheImage").src = "images/" + words [activeWordIndex + 1] + ".png";
        }

        return words [activeWordIndex];
    },
    showQuestionAndAnswers: function () {
        var chars = Exercises.activeExcercise.chars;
        if (chars != null) {
            for (var i = 0; i < chars.length; i++) {
                var button = document.getElementById("choice" + (i + 1));
                button.innerHTML = chars [i];
            }
        }

        var questionHolder = document.getElementById("question");
        questionHolder.innerHTML = Exercises.question;
    },
    changeBackground: function (numberOfChoises) {
        if (numberOfChoises == null || numberOfChoises < 2) {
            numberOfChoises = 2;
        }
        var exercise = $("#exercise");
        exercise.removeClass("background5");
        exercise.removeClass("background4");
        exercise.removeClass("background3");
        exercise.removeClass("background2");
        exercise.addClass("background" + numberOfChoises);
    },
    checkAnswer: function (button) {
        var answer = button.innerHTML;
        var exercise = Exercises.activeExcercise;
        var fullAnswer = Exercises.question.replace(/-+/g, answer);
        if (fullAnswer == Exercises.answer) {
            Exercises.dogEndPositionButton = button;
            Exercises.rightAnswer(button);
        } else {
            Exercises.wrongAnswer();
        }
    },
    
    correctSounds: ["","cool","correct","great","thatsright","welldone"],
    OldCorrect: -1,
                    
    rightAnswer: function (button) {
        document.getElementById("question").innerHTML = Exercises.answer;
        
        var r = 0;
    	while ( (r = Math.floor(Math.random()*5) + 1) == Exercises.OldCorrect ); 
    	Exercises.OldCorrect = r;
    	var s = "sounds/" + Exercises.correctSounds[r] + ".ogg";
        
        Exercises.playSound(s);
        
        // prevent further clicks
        $("#continueButton").show();
        Exercises.hideWrongLetters(button);
        Exercises.animateDog();
        var marks = Exercises.activeExcercise.marks ["wordlength" + Exercises.wordLength];
        if (marks != null && marks.correct != null) {
            marks.correct++;
        } else {
            if (marks != null) {
                marks.correct = 1;
            } else {
                Exercises.activeExcercise.marks ["wordlength" + Exercises.wordLength] = {correct: 1};
            }
        }

    },
    
    OldWrong: -1,
    
    wrongAnswer: function () {
    	
    	var r = 0;
    	while ( (r = Math.floor(Math.random()*5) + 1) == Exercises.OldWrong ); 
    	Exercises.OldWrong = r;
    	var s = "sounds/error" + r + ".ogg";
        Exercises.playSound(s);
        $("#question").hide();
        $("#answer").show();
        Exercises.blinkAnswer();
        var marks = Exercises.activeExcercise.marks ["wordlength" + Exercises.wordLength];
        if (marks != null && marks.incorrect != null) {
            marks.incorrect++;
        } else {
            if (marks != null) {
                marks.incorrect = 1;
            } else {
                Exercises.activeExcercise.marks ["wordlength" + Exercises.wordLength] = {incorrect: 1};
            }
        }
    },
    blinkAnswer: function () {
        if (Exercises.blinkCounter == null) {
            Exercises.blinkCounter = 0;
        }
        if (Exercises.blinkCounter < 10) {
            if (Exercises.blinkCounter % 2 == 0) {
                $("#answer").css("color", "red");
            } else {
                $("#answer").css("color", "white");
            }
            Exercises.blinkCounter++;
            setTimeout(Exercises.blinkAnswer, 200);
        } else {
            delete Exercises.blinkCounter;
            var answer = $("#answer");
            answer.css("color", "red");
            answer.hide();
            $("#question").show();
        }
    },
    
    mp3file : null,
    mp32file : null,
    
    shouldplaymusic : true,
    musictag: null,
    playMusic: function (src) {
    	if (Exercises.musictag == null) {
        var audio = document.createElement("audio");
        document.body.appendChild(audio);
        audio.preload = true;
        audio.src = src;
        audio.load();
    	} else {
    		var audio = Exercises.musictag;
    	}
    	
    	
        if (Exercises.shouldplaymusic) audio.play();
        
        Exercises.musictag = audio;
    },
    
    playSound: function (ssrc, ssecondSrc) {
        
    	var temp ="";
    	
    	
    	var src = ssrc;
    	temp = src.replace("mp3", "ogg");
    	src = temp;
    	
    	var secondSrc = null;
    	if (ssecondSrc!=null) {
    		secondSrc = ssecondSrc;
    		temp=ssecondSrc.replace("mp3", "ogg");
    		secondSrc = temp;
    	}    	

            var audio = document.createElement("audio");
            audio.preload = true;
            audio.src = src;
            audio.addEventListener("ended", function () {
                setTimeout(this.parentNode.removeChild(this), 500);                
            });
            document.body.appendChild(audio);
            audio.load();
            
        	
        		
            setTimeout(audio.play(), 250);
                
            


            if (secondSrc != null) {
                var audio2 = document.createElement("audio");
                audio2.src = secondSrc;
                audio2.addEventListener("ended", function () {
                    this.parentNode.removeChild(this);
                });
                document.body.appendChild(audio2);
                audio2.load();
                audio2.play();
            }
       
    },
    animateDog: function () {
    	
        // pick a random animation
        Exercises.dogAnimations.sort(function () {
            return (Math.round(Math.random()) - 0.5);
        });
        $("#dog").hide();
        
        $("#continue").show();
        
        //$("#" + Exercises.dogAnimations [0]).show();
        Exercises.stopPlayingAnimation=false;
        Exercises.playAnimation(Exercises.animations[Exercises.dogAnimations [0]-1]);
        
        
    },
    resetDog: function () {
        $("#" + Exercises.animations[Exercises.dogAnimations [0]-1].name).hide();
        $("#dog").show();
        Exercises.playAnimation(Exercises.animations[5]);
    },
    continueExercise: function () {
        // wait for animation to finish
        // if (Exercises.dog == null) {
    	Exercises.stopPlayingAnimation=true;
        $("#continue").hide();
        $("#continueButton").hide();
        Exercises.showNextWord();
        Exercises.showAllLetters();
        Exercises.resetDog();
        //}
    },
    
    FirstRun : true,
    
    changeExercise: function (exerciseIndex) {
    	Exercises.shouldplaymusic = false;
    	Exercises.musictag.pause();
    	
    	
        var activeExerciseIndex = 0;
        for (var i = 0; i < Exercises.types.length; i++) {
            if (Exercises.types [i] == Exercises.activeExcercise) {
                activeExerciseIndex = i;
                break;
            }
        }

        if ((exerciseIndex != activeExerciseIndex) || Exercises.FirstRun == true) {
        	Exercises.FirstRun = false;
            delete Exercises.activeExcercise.activeWordIndex;
            Exercises.activeExcercise = Exercises.types [exerciseIndex];
            document.getElementById("exerciseTitle").innerHTML = Exercises.activeExcercise.label;
            Exercises.cacheExerciseImage();
            Exercises.exerciseWasChanged = true;
            // wait some time for the image to preload:
            setTimeout(Exercises.closeHome, 500);
        } else {
            Exercises.closeHome();
        }

    },
    showHome: function () {
        $("#exercise").hide();
        $("#home").show();
        Exercises.shouldplaymusic = true;
        Exercises.playMusic("sounds/music.mp3");
    },
    closeHome: function () {
        if (Exercises.exerciseWasChanged) {
            delete Exercises.exerciseWasChanged;
            Exercises.showNextWord();
        }
        $("#home").hide();
        $("#exercise").show();
        Exercises.resetDog();
    },
    openInstructions: function () {
        $("#instructions").show();
    },
    closeInstructions: function () {
        $("#instructions").hide();
        Exercises.instructionPage = 1;
        var instructions = document.getElementById("instructions");
        instructions.className = "page" + Exercises.instructionPage;
    },
    previousInstructionPage: function () {
        if (typeof Exercises.instructionPage == "undefined") {
            Exercises.instructionPage = 1;
        } else {
            Exercises.instructionPage--;
            if (Exercises.instructionPage <= 0) {
                Exercises.instructionPage = 4;
            }
        }
        var instructions = document.getElementById("instructions");
        instructions.className = "page" + Exercises.instructionPage;
    },
    nextInstructionPage: function () {
        if (typeof Exercises.instructionPage == "undefined") {
            Exercises.instructionPage = 2;
        } else {
            Exercises.instructionPage++;
            if (Exercises.instructionPage > 4) {
                Exercises.instructionPage = 1;
            }
        }
        var instructions = document.getElementById("instructions");
        instructions.className = "page" + Exercises.instructionPage;
    },
    openAbout: function () {
        $("#about").show();
    },
    closeAbout: function () {
        $("#about").hide();
    },
    openMarks: function () {
        var marksViewWordLengthTab = $(".markswordslengthtab.selected");
        var marksViewWordLength = marksViewWordLengthTab [0].id.substring("markswordslengthtab".length);
        Exercises.switchMarksTab(null, marksViewWordLength);
        $("#marks").show();
    },
    closeMarks: function () {
        $("#marks").hide();
    },
    cacheExerciseImage: function () {
        document.getElementById("nextExerciseImage").src = "images/" + Exercises.activeExcercise.words [0] + ".png";
    },
    setWordLength: function (length) {
        $("#wordlength" + Exercises.wordLength).removeClass("selectedwordlengthbutton");
        $("#wordlength" + length).addClass("selectedwordlengthbutton");

        Exercises.wordLength = length;
        Exercises.prepareExerciseQuestions();
        Exercises.cacheExerciseImage();
        //Exercises.showNextWord();
    },
    changeOrientation: function (orientation) {
        switch (orientation) {
            case 0:
            case 180:
                $("body").addClass("portrait");
                break;
            case 90:
            case -90:
                $("body").removeClass("portrait");
                break;
        }
        // Exercises.resetDog();
    },
    isPortraitOrientation: function () {
        return $("body").hasClass("portrait");
    },
    switchMarksTab: function (domEvent, wordlength) {
        if (domEvent != null) {
            domEvent.stopPropagation();
        }

        $(".markswordslengthtab").removeClass("selected");
        var selectedTab = $("#markswordslengthtab" + wordlength);
        selectedTab.addClass("selected");

        var table = document.getElementById("markstable");
        for (var i = 0; i < table.rows.length; i++) {
            var row = table.rows [i + 1];
            var exercise = Exercises.types [i];
            if (exercise != null) {
                var cells = row.cells;
                var marks = exercise.marks ["wordlength" + wordlength];
                if (marks != null) {
                    var total = 0;
                    if (marks.correct != null) {
                        cells [1].innerHTML = marks.correct;
                        total += marks.correct;
                    } else {
                        cells [1].innerHTML = 0;
                    }
                    if (marks.incorrect != null) {
                        cells [2].innerHTML = marks.incorrect;
                        total += marks.incorrect;
                    } else {
                        cells [2].innerHTML = 0;
                    }
                    cells [3].innerHTML = total;
                } else if (wordlength == "all") {
                    var allCorrect = 0;
                    var allIncorrect = 0;
                    marks = exercise.marks ["wordlength4"];
                    if (marks != null) {
                        if (marks.correct != null) {
                            allCorrect += marks.correct;
                        }
                        if (marks.incorrect != null) {
                            allIncorrect += marks.incorrect;
                        }
                    }
                    marks = exercise.marks ["wordlength6"];
                    if (marks != null) {
                        if (marks.correct != null) {
                            allCorrect += marks.correct;
                        }
                        if (marks.incorrect != null) {
                            allIncorrect += marks.incorrect;
                        }
                    }
                    marks = exercise.marks ["wordlength8"];
                    if (marks != null) {
                        if (marks.correct != null) {
                            allCorrect += marks.correct;
                        }
                        if (marks.incorrect != null) {
                            allIncorrect += marks.incorrect;
                        }
                    }
                    marks = exercise.marks ["wordlength100"];
                    if (marks != null) {
                        if (marks.correct != null) {
                            allCorrect += marks.correct;
                        }
                        if (marks.incorrect != null) {
                            allIncorrect += marks.incorrect;
                        }
                    }
                    cells [1].innerHTML = allCorrect;
                    cells [2].innerHTML = allIncorrect;
                    cells [3].innerHTML = (allCorrect + allIncorrect);
                } else {
                    cells [1].innerHTML = 0;
                    cells [2].innerHTML = 0;
                    cells [3].innerHTML = 0;
                }

                var totalCorrect = parseInt(cells [1].innerHTML);
                var totalIncorrect = parseInt(cells [2].innerHTML);
                if (totalIncorrect > 0 && totalIncorrect >= ((totalCorrect + totalIncorrect) / 2)) {
                    $(row).addClass("marksproblemexercise");
                } else {
                    $(row).removeClass("marksproblemexercise");
                }
            }
        }
    },
    openMagmentis: function () {
        top.location.href = "http://www.magmentis.com";
    },
    hideWrongLetters: function (rightLetter) {
        $(".choice").each(function() {
            if (this != rightLetter) {
                $(this).addClass("wrongLetter");
            }
        });
    },
    showAllLetters: function () {
        $(".choice").each(function() {
            $(this).removeClass("wrongLetter");
        });
    },
    
    autoDetectScreenResolution: function () { 
    	
    	// centre the divs in the window
    	var thedivs = [ "exercise", "home", "instructions", "about", "marks" ];
    	
    	
    	// calculate left and top coordinates
    	var leftx = ""+ ((window.innerWidth - 1024) / 2) + "px";
    	var topy = ""+ ((window.innerHeight - 600) / 2) + "px";
    	
    	var i = 0;
    	for (i=0; i<thedivs.length; i++) {
    		var d = document.getElementById(thedivs[i]);
    		d.style.left = leftx;
    		d.style.top = topy;
    	}
    }

};