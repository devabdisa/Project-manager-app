
import NewTask from "./NewTask";

const Tasks = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
     <NewTask/>
      <p className="text-stone-800 my-4">
        This project does no have any tasks yet.
      </p>
      <ul></ul>
    </section>
  );
};

export default Tasks;
