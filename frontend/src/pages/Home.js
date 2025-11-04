import { useEffect, useState } from "react";

const Home = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('http://localhost:5000/api/workouts');
            const json = await response.json();

            if (response.ok) {
                setWorkouts(json);
            }
        }

        fetchWorkouts();
    }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => (
          <div className="workout-details" key={workout._id}>
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p>{new Date(workout.createdAt).toLocaleDateString('en-US')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;