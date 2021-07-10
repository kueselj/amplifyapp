function calculateOneRepMax(weight, reps) {
    if (reps == 0) {
        return 0;
    }
    if (reps == 1) {
        return weight;
    }
    return Math.round(weight * (1 + reps/30))
}

export default calculateOneRepMax;