import PictureCard from "./pictureCard"

 const Gallery = ({pictures, setPictures}) => {
        
    return   (<>
	
	<div className="progress-wrap">
		<svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
			<path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
		</svg>
	</div>
	
	<div className="section-banner">
		<div className="container">
			<div className="row">
				<div className="col-md-12 text-center">
					<span className="text-bold dorothea-heading-meta" data-animate-effect="fadeInUp">Kingsley Anex</span>
					<h2 className="dorothea-heading" data-animate-effect="fadeInUp">Photo Gallery</h2>
				</div>
			</div>
            
			<div className="row align-items-stretch dorothea-photos">
				<div className="col-12">
					<div className="row align-items-stretch">
                        {
                            pictures.map((image,index) => <PictureCard  setPictures={setPictures} src={image.url} id={image.key} key={index} />) 
                        }
						
					</div>
				</div>
			</div>
		</div>
	</div>
	
</>) }
export default Gallery