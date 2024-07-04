import { useLocation } from 'react-router-dom';

const View = () => {
  const location = useLocation();

  const { data } = location.state || {};

  return (
<>
<div className="container pm-certificate-container">
    <div className="outer-border"></div>
    <div className="inner-border"></div>
    <div className="pm-certificate-border col-xs-12">
      <div className="row pm-certificate-header">
        <div className="pm-certificate-title cursive col-xs-12 text-center">
          <h2>Kerala Blockchain Academy</h2>
        </div>
      </div>
      <div className="row pm-certificate-body">
        <div className="pm-certificate-block">
          <div className="col-xs-12">
            <div className="row">
              <div className="col-xs-2">
                {/* LEAVE EMPTY */}
              </div>
              <div className="pm-certificate-name underline margin-0 col-xs-8 text-center">
                <span id="name" className="pm-name-text bold">
                  {data.username}
                </span>
              </div>
              <div className="col-xs-2">
                {/* <!-- LEAVE EMPTY --> */}
              </div>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="row">
              <div className="col-xs-2">
                {/* <!-- LEAVE EMPTY --> */}
              </div>
              <div className="pm-earned col-xs-8 text-center">
                <span className="pm-earned-text padding-0 block cursive">has earned</span>
                <span id="grade" className="pm-credits-text block bold sans">
                  {data.grade}
                </span>
              </div>
              <div className="col-xs-2">
                {/* <!-- LEAVE EMPTY --> */}
              </div>
              <div className="col-xs-12"></div>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="row">
              <div className="col-xs-2">
                {/* <!-- LEAVE EMPTY --> */}
              </div>
              <div className="pm-course-title col-xs-8 text-center">
                <span className="pm-earned-text block cursive">while completing the training course
                  entitled</span>
              </div>
              <div className="col-xs-2">
                {/* <!-- LEAVE EMPTY --> */}
              </div>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="row">
              <div className="col-xs-2">
                {/* <!-- LEAVE EMPTY --> */}
              </div>
              <div className="pm-course-title underline col-xs-8 text-center">
                <span id="course" className="pm-credits-text block bold sans">
                 {data.course}
                </span>
              </div>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="row">
              <div className="col pm-certified">
                <span id="ID" className="pm-credits-text block bold sans">{data.cert_id}
                </span>
              </div>
              <div className="col pm-certified text-end">
                <span id="date" className="pm-credits-text block sans">{data.issuedate}</span>
                <span className="pm-credits-text block sans">Place: Trivandrum</span><br />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12">
          <div className="row">
            <div className="pm-certificate-footer">
              <br /><br />
              <div className="col pm-certified text-end">
                <span className="bold block">(sd/-)</span>
                <span className="bold block">Director</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>  )
}

export default View