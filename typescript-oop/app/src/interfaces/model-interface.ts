import { Comparable } from './comparable-interface.js'
import { Printable } from './printable-interface.js'

export interface ModelInterface<T> extends Printable, Comparable<T> {}
