const newTask = `${process.argv[2]} ${process.argv[3]}`;
const taskList = ["passear com cachorro"];

const toDO = (task) => {
  return taskList.push(task);
};

toDO(newTask);

console.log(taskList);
