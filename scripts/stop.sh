#!/bin/bash
pm2 stop all || true
pkill node || true
