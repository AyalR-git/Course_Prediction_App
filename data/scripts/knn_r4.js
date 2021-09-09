//const MarksModel = require('/../../models/marksModel');
var BreakException = {};

/* Calculates the distance between 2 points in 4 dimensions */
function distance_r4(a, b){
	var delta1 = Math.pow(b.x1 - a.x1, 2);
	var delta2 = Math.pow(b.x2 - a.x2, 2);
	var delta3 = Math.pow(b.x3 - a.x3, 2);
	var delta4 = Math.pow(b.x4 - a.x4, 2);
	return Math.sqrt(delta1 + delta2 + delta3 + delta4);
}

/* Returns a point object with additional dist_from_p attribute */
function get_min_point(a, dist){
	return {x1: a.x1, x2: a.x2, x3: a.x3, x4: a.x4, final: a.final, dist_from_p: dist};
}

/* Returns the index of the point with the maximum distance from the point-to-predict */
function get_index_of_max(min_p_array, size){
	var max = 0;
	var index_of_max = 0;
	for(var i=0 ; i<size ; i++){
		if(min_p_array[i].dist_from_p > max){
			max = min_p_array[i].dist_from_p;
			index_of_max = i;
		}
	}

	return index_of_max;
}

/* Returns the grade prediction of a given point by KNN algorithm  */
// eslint-disable-next-line no-unused-vars
async function knn_prediction(k, point){
	var data = await get_data();
	var closest_p = [];
	var d, sum=0;

	/* Initiate k default points */
	for (var i = 0; i < k; i++) {
		var element_to_push = {x1: 0, x2: 0, x3: 0, x4: 0, final: 0, dist_from_p: Number.MAX_VALUE};
		closest_p.push(element_to_push);
	}

	/* Check the distance and save the k closest points */
	data.forEach(p => {
		d = distance_r4(p, point);
		var index = get_index_of_max(closest_p, k);
		if(d < closest_p[index].dist_from_p){
			closest_p[index] = get_min_point(p, d);
		}
	});

	/* Return the avarage final grade of all closest points */
	closest_p.forEach(p => {
		sum += p.final;
	});
	return sum / k;
}

/* Gets the data from DB and returns it as a list of points */
async function get_data(){
	var points_list = [];
	await fetch('/db').then(val => val.json()).then(marks => {
		try{
			marks.forEach(element => {
				if(typeof element.Algebra == 'undefined') throw BreakException;
				points_list.push({x1: element.Algebra, x2: element.Infinite, x3: element.Discrete, x4: element.Python, final: element.Final});
			});
		}catch(e){
			if (e !== BreakException) throw e;
		}
	});
	return points_list;
}
