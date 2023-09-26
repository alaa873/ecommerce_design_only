import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavDropdown } from 'react-bootstrap'

const AdminNavbar = ({ Togel }) => {
    return (
        <div className="container d-flex justify-content-between pt-2 ">
            <FontAwesomeIcon icon={faBars} onClick={Togel} className=' mb-1 fs-4  ' />
            <div>
                <NavDropdown title=" Alaa" id="basic-nav-dropdown" className='me-md-5'>
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">  Another action         </NavDropdown.Item>
                </NavDropdown>
            </div>
        </div>

    )
}

export default AdminNavbar