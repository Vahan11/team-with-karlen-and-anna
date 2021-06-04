"use strict";

class Feater {
  #id;
  constructor(id, featName) {
    if (!Number(id)) {
      throw new Error("id must be a number!");
    } else {
      this.#id = id;
    }

    this.name = featName;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (Number(value)) {
      throw new Error("fetName can't be a number");
    } else {
      this._name = value;
    }
  }
}
