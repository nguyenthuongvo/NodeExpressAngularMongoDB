module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
          Name: String,
          Price: Number,
          Category: String,
          Author: String
        },
        { timestamps: true }
    );


    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
      });
    
      const books = mongoose.model("Books", schema,'Books');

    return books;
};