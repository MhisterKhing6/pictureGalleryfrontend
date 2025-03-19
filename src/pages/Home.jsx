import { useEffect, useState } from "react"
import Top from "../components/Header"
import Gallery from "../components/Picturecomponet"
import Upload from "../components/UploadPage"
import  Spinner  from "react-bootstrap/Spinner"
import Button  from "react-bootstrap/Button"
import { Config } from "../config/Config"

const Home = () => {

    const [showUploadPage, setShowUploadPage] = useState(false)
    const [pictures, setPictures] = useState([]);
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [disablPrev, setDisablePrev] = useState(false);
    const [last, setLast] = useState(false)
    const [nextLoading, setNextLoading] = useState(false);
    const [prevLoading, setPrevLoading] = useState(false)

    

    useEffect(() => {
        const fetchData = async () => {
          try {
            // Replace with your API endpoint
            const response = await fetch(`${Config.getBaseUrl()}/api/files/images?page=${page}&size=5`);
            if (!response.ok) {
              alert("couldn't load images")
            } else {
                const result = await response.json();
                setPictures(result.data ? result.data : [])
                if(page === 1) {
                    setDisablePrev(true);
                  }
                if(result.last){
                    setLast(true)
                }
            }
            
          } catch (error) {
            console.log(error)
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);  

    const handleDataPage = async (page, state) => {
      try {
        // Replace with your API endpoint
        if(state === "f")
            setNextLoading(true)
        else
            setPrevLoading(true)
        const response = await fetch(`${Config.getBaseUrl()}/api/files/images?page=${page}&size=5`);
        if (!response.ok) {
          alert("couldn't load images")
        } else {
            const result = await response.json();
            setPage(page)
            console.log(result)
            setPictures(result.data ? result.data: [])
            setDisablePrev(false)
            if(result.last){
                setLast(true)
            } else {
              setLast(false)
            }
            if(page === 1)
              setDisablePrev(true)
            else {
              setDisablePrev(false)
            }
        }
      } catch (error) {
        console.log(error)
        alert("couldn't load images")
      } 
      if(state === "f")
        setNextLoading(false)
    else
        setPrevLoading(false)
    }


    return (
        <>
          { !loading ? <> <header>
            <Top  setShowUpload={setShowUploadPage}/>
            <Upload setPictures={setPictures} show={showUploadPage} showFunction={setShowUploadPage}/>
            </header>
            <div>
                <Gallery pictures={pictures} setPictures={setPictures} />
            </div>
            <div className="text-center">
                
			 <Button onClick={()=> handleDataPage(page - 1, "b")} disabled={disablPrev || prevLoading} variant="dark" className=" mb-5 me-5">{prevLoading ? <Spinner />: "Prev"}</Button>
             <Button onClick={() =>  handleDataPage(page + 1, "f")} disabled={last || nextLoading} variant="dark" className="mb-5">{nextLoading ? <Spinner />: "Next"}</Button>
            </div>
            </> : <div className="d-flex justify-content-center align-items-center min-vh-100 w-auto text-center">
  <Spinner variant="primary" className="text-center m-5" size="100px" />
</div>

          }
        </>

    )
}
export default Home