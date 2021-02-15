import { Terminal } from 'xterm';
import React from 'react';
import { render } from 'ink';
// import { Counter } from './counter'
// import { Table } from './table'
import { GradientText } from './gradient'
import EventEmitter from 'events';


interface Stream extends EventEmitter {
	output: string;
	columns: number;
  rows: number;
	write(str: string): void;
  setEncoding(): void;
  setRawMode(): void;
  resume(): void;
  pause(): void;
	get(): string;
  isTTY: boolean;
}

const term = new Terminal({convertEol: true, disableStdin: false, });

const createStdout = (columns?: number): Stream => {
	const stdout = new EventEmitter() as Stream;
	stdout.columns = columns ?? 100;
  stdout.rows = 80;
  stdout.isTTY = true;
	stdout.write = (str: string) => {
    term.write(str)
  }
  stdout.setEncoding = () => {}
  stdout.setRawMode = () => {}
  stdout.resume = () => {}
  stdout.pause = () => {}
	return stdout;
};

const stdout = createStdout() as any
const stdin = createStdout() as any

term.onData((data) => {
  stdin.emit('data', data)
});

render(React.createElement(GradientText, {}), { stdout: stdout, stderr: stdout, stdin, debug: false, patchConsole: false});

document.addEventListener("DOMContentLoaded", function(event) {
  const element = document.getElementById('terminal')
  if (element) {
    term.open(element);
  }
});