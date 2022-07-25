import React from 'react'

const VerticalHeader = () => {
  return (
    <div>
        <div className="vertical-nav second-b ps-2" id="sidebar">
                <div className="py-3 px-3 mb-3 second-b">
                    <div className="media d-flex align-items-center second-b">
                        <a href="">
                            {" "}
                            <img
                                src="./assests/fatoura-logo1.png"
                                width={180}
                                height={75}
                                alt="fatoura-logo1"
                                className="profile-logo"
                            />{" "}
                        </a>
                    </div>
                </div>
                <ul className="nav flex-column second-b mb-0 ">
                    <li className="nav-item">
                        <a href="#" className="nav-link text-white">
                            <img
                                src="./assests/Mask Group 7.svg"
                                className="me-2"
                                alt="dashboard-logo"
                            />
                            Dashboard
                        </a>
                    </li>

                    <li className="nav-item my-3">
                        <a href="#MyInvoices" className="nav-link text-white">
                            <img
                                src="./assests/Mask Group 392.svg"
                                className="me-2"
                                alt="dashboard-logo"
                            />
                            My Documents
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#" className="nav-link text-white">
                            <img
                                src="./assests/Mask Group 393.svg"
                                className="me-2"
                                alt="dashboard-logo"
                            />
                            My Reports
                        </a>
                    </li>
                </ul>
            </div>
    </div>
  )
}

export default VerticalHeader