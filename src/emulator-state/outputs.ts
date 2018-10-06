import { List } from 'immutable';
import { Record } from 'immutable';

/**
 * Stores outputs from the emulator (e.g. text to display after running a command)
 * @param  {Array}  [outputs=[]] Previous outputs
 * @return {List}               List of outputs objects
 */
export const create = (outputs = []): List<Record<any>> => {
  return List(outputs);
};

/**
 * Adds a new output record
 * @param {List}         outputs      outputs list
 * @param {OutputRecord} outputRecord record conforming to output schema
 */
export const addRecord = (outputs: Array<Record<string>>, outputRecord: Record<string>) => {
  if (!Record.isRecord(outputRecord)) {
    throw new Error('Only records of type OutputRecord can be added to outputs');
  }

  if (!outputRecord.has('type')) {
    throw new Error('Output record must include a type');
  }

  if (!outputRecord.has('content')) {
    throw new Error('Output record must include content');
  }

  return outputs.push(outputRecord);
};
