import calculateOneRepMax from "./CalculateOneRepMax";

function calculateWeightGivenReps(weight, reps, desiredReps) {

    if (reps == desiredReps) {
        return weight
    }
    else {

        let orm = 0
        if (reps == 0) {
            orm = 0;
        }
        if (reps == 1) {
            orm = weight;
        }
        else {
            orm = weight * (1 + reps/30)
        }

        if (desiredReps == 1) {
            return Math.round(orm)
        }
        return Math.round(orm / (1 + desiredReps / 30))
    }
}

export default calculateWeightGivenReps;


//262.5 = 225 * (1 + 5/30)
//