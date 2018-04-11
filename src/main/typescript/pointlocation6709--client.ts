import { PointLocation6709 } from 'pointlocation6709-ts'

function usePointLocation6709() 
{
	
    let angle1 = new PointLocation6709.Angle(1);
	console.log(angle1.toString());

    let latitude1 = new PointLocation6709.Latitude(angle1);
	console.log(latitude1.toString());
	
    let longitude1 = new PointLocation6709.Longitude(angle1);
	console.log(longitude1.toString());
	
};

usePointLocation6709();
