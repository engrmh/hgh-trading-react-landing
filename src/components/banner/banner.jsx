import {Grid} from "@mui/material";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export default function Banner() {
    return (
        <>
            <Grid container className='mx-auto flex max-w-7xl items-center justify-center pt-0 p-3 lg:px-8 h-96'>
                <Grid item xs={12}>
                    <div className="h-52 md:h-96 flex items items-center justify-center flex-col">
                        <h1 className='text-3xl font-bold bg-amber-50 p-2 rounded'>بازرگانی غنودی توزیع کننده قطعات یدکی خودرو</h1>
                        <a href='https://hgh-trading.ir/product-category/special-offer/' className='mt-6 p-2 bg-red-600 text-white rounded shadow-2xl'>
                            <AutoAwesomeIcon className='ml-2'/>
                            مشاهده پیشنهادات شگفت انگیز
                        </a>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
// رسالت ما تامین مستمر ,
// کیفیت پایدار , گارانتی یکپارچه …