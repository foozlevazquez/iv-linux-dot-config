#!/bin/bash


# Count is 0 based. i.e. "desktop 1" is numbered 0 for wmctrl
BASE=1
X_RANGE=2
Y_RANGE=4
I=0
for H in backend-api stats-api monitordb2 api-dispatch opsmon download www; do
    X=$(((I % (Y_RANGE-1)) + BASE))
    Y=$(((I / (Y_RANGE-1)) % X_RANGE))
    SCREEN=$(((Y * Y_RANGE) + X))
    xterm -title ${H}.serverpilot.io -r -e mosh ubuntu@${H}.serverpilot.io  &
    sleep 1
    wmctrl -r ${H} -t ${SCREEN}
    I=$((I + 1))
done
