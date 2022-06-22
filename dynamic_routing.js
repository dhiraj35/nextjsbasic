//Example of dynamic routing 
import {useRouter} from 'next/router';
const Page = () => {
    const router = useRouter();
    const pageNo = router.query.pageNo;
    return (
         <h1>Welcome {pageNo}</h1>
    )
}
export default Page;
