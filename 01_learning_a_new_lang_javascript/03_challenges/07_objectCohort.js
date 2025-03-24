const cohort = {
    name : 'Nov24',
    id : 1,
    studentNames : ['Aysin', 'Michal', 'Lubitzca', 'Louis']
}

const cohortInfo = (cohort) =>
{
    return `${cohort.id} - ${cohort.name} - ${cohort.studentNames.length} students in this cohort`;
}

console.log(cohortInfo(cohort))