class Building {
  constructor(sqft) {
    if (new.target !== Building && typeof this.evacuationWarningMessage !== 'function') { throw new Error('Class extending Building must override evacuationWarningMessage'); }
    if (typeof (sqft) !== 'number') throw TypeError('Sqft must be a number');
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}

export default Building;
/*
class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error("Class extending Building must override evacuationWarningMessage");
  }
}

export default Building;*/
