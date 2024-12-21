function StickyHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="page-heading about-page-heading" id="top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner-content">
              <h2>{title}</h2>
              <span>{description}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StickyHeader;
