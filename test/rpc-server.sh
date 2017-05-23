#!/usr/bin/env bash

grape -h 127.0.0.1 --dp 20001 --apw 30001 --aph 30002 --bn '127.0.0.1:20002,127.0.0.1:20003' &
grape --dp 20002 --apw 40001 --aph 40002 --bn '127.0.0.1:20001,127.0.0.1:20003' &

node examples/rpc_server.js