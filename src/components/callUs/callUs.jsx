import {Grid} from "@mui/material";
import {users} from "../../data/data.jsx";
import CallBox from "./CallBox/callBox.jsx";

export default function CallUs() {
    return (
        <div className='mx-auto max-w-7xl p-3 lg:px-8 h-56 flex items-center justify-center mt-10' id='callus'>
            <Grid container>
                <Grid item xs={12} className="flex flex-col items-center justify-center !mb-10" >
                    <h2 className='w-32 border-b-2 border-black flex justify-center text-[1.4rem]'>تماس با ما</h2>
                </Grid>
                {
                    users.map((user , index) => (
                        <Grid item xs={6} sm={4} md={2} lg={2} key={index} className='p-3.5'>
                            <CallBox {...user}/>
                        </Grid>
                    ))
                }



            </Grid>
        </div>
    )
}
