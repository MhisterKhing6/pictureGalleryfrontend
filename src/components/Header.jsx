import Button from 'react-bootstrap/Button'
import Upload from './UploadPage'

const Top = ({setShowUpload}) => {
    return  (<>
    <header className="dorothea-header">
		<div className="container">
			<div className="row align-items-center">
				<div className="col-6 col-md-6 dorothea-logo-wrap">
					<a href="index.html" className="dorothea-logo text-dark">King_Anex</a>
				</div>
				<div className="col-6 col-md-6 text-right dorothea-menu-burger-wrap"><Button  variant='dark' onClick={()=> setShowUpload(true)} className="btn btn-info">Upload</Button>
                </div>
			</div>
		</div>
	</header>
    </>)
}
export default Top