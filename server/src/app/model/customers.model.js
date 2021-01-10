module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
          name: String,
          phone: String,
          orderDate: String,
          deliveryDate: String
        },
        { timestamps: true }
    );


    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
      });
    
      const customers = mongoose.model("customers", schema);

    return customers;
};