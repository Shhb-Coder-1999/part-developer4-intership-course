const {root} = require("../../../")
class MusicModel {
  constructor(fields, files) {
    this.name = fields.name;
    this.genre = fields.genre;
    this.path = files.song.filepath.split(root)[1];
    this.created_at = files.song.lastModifiedDate;
    this.updated_at = files.song.updated_at;
    this.description = fields.description;
    this.cover_path = files.cover.filepath.split(root)[1];
  }
}

module.exports = MusicModel;
