import React from "react";
import { Services } from "../services/Services";
import program from "./data.json";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

const fetchResults = async () => {
  const response = await Services.getTrainings();
  return response;
};

function NormalTraining() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["results"],
    queryFn: fetchResults,
  });
  if (!isPending && !error && !isError) {
    return (
      <div className="max-w-screen-xl mx-auto px-8 lg:px-0">
        {Object.keys(program || data).map((day, index) => (
          <div
            key={index}
            className="my-10 bg-gray-200 dark:bg-gray-700 rounded-2xl p-10"
          >
            <h2 className="max-w-2xl mb-3 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black dark:text-white">
              Day {index + 1}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {program[day].map((exercise, exerciseIndex) => (
                <div key={exerciseIndex} className="flex flex-col md:flex-row">
                  <div className="card text-black dark:text-white my-5 text-lg md:w-1/2">
                    <h3 className="text-3xl ">{exercise.exercise_name}</h3>
                    <p>Sets: {exercise.sets}</p>
                    <p>Reps: {exercise.reps}</p>
                    <p>Working Weight: {exercise.working_weight}</p>
                    <p>Relax Time: {exercise.relax_time}</p>
                  </div>
                  <div className="card text-white my-5 text-lg md:w-1/2">
                    <iframe
                      width={exercise.width}
                      height={exercise.height}
                      src={exercise.video_link}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NormalTraining />
    </QueryClientProvider>
  );
};

export default App;
