import React, { useEffect, useState } from "react";
import { getFakeUsers } from "../services/fakeUsersService";

const ApiComponent = (props?: any) => {

    const [fakeUserList, setFakeUserList] = useState<any[]>([]);
    
    useEffect(() => {
        
        getFakeUsers().subscribe((response: any) => {
    
            console.log(response);
            setFakeUserList(response.results);
        });
    }, []);


    return(
        <>
            <div className="col-10 m-auto">
                <div className="row">
                    {fakeUserList.map((fu, idx) => 
                        <div className="col-2 card" key={idx}>
                            <div className="card-title"></div>
                            <div className="card-body"></div>
                        </div>    
                    )}
                </div>
            </div>
        </>
    );
}

export default ApiComponent;