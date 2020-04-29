const db= require('../data/db_config.js');

module.exports= {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
    addStep,
};

function find(){
    return db('schemes');
};

function findById(id){
    return db('schemes')
        .where('id', id)
        .first();
};

function findSteps(scheme_id){
    return db.select('scheme_name', 'step_number', 'instructions') // didn't include the scheme_id
        .from('steps')
        .join('schemes', 'schemes.id', 'steps.scheme_id') // JOIN 'schemes' ON 'schemes.id' = 'steps.id'
        .where('scheme_id', scheme_id) 
        .orderBy('scheme_name', 'step_number', 'instructions') // didn't include the scheme_id
};

function add(newScheme){
    return db('schemes')
        .insert(newScheme);
};

function update(updateScheme, id){
    return db('schemes')
        .update(updateScheme)
        .where('id', id)
};

function remove(id){
    return db('schemes')
        .where('id', id)
        .del();
};

function addStep(step, scheme_id){
    return db('steps')
        .insert(step)
        .where('scheme_id', scheme_id)
}