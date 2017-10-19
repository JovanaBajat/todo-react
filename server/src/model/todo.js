import mongoose from 'mongoose';

const newThingTodo = new mongoose.Schema({
  title : {type: String, required : true},
  description : String
  // date : {type : Date, default : Date.now}
},
{
  versionKey : false
});

export default mongoose.model("ThingTodo", newThingTodo, "todos");
