import CallIcon from '@mui/icons-material/Call';
import './callBox.css'
export default function CallBox({title , phoneNumber , callNumber}) {
    return (
        <a  className='no-underline text-black callBox flex flex-col items-center gap-3 bg-amber-400 px-1.5 py-3' href={`tel:${callNumber}`}>
            <CallIcon className='vidration mb-4 !text-[2rem]'/>
            <h4>{phoneNumber}</h4>
            <h4>{title}</h4>
        </a>
    )
}
