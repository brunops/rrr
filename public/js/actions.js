'use strict'

/*
 * action types
 */

export const ACTION = 'ACTION'


/*
 * action creators
 */

export function action(text) {
  return { type: ACTION, text }
}
