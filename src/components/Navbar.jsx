import React from "react";
import { FaHome, FaBell, FaUserCircle } from "react-icons/fa";
import { MdReportProblem } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Left: Logo & Brand */}
      <div className="flex items-center gap-2 text-xl font-bold text-blue-600">
        <FaHome />
        <span>ClearFix</span>
      </div>

      {/* Center: Navigation Links */}
      <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
        <li className="hover:text-blue-600 cursor-pointer">Dashboard</li>
        <li className="hover:text-blue-600 cursor-pointer">Complaints</li>
        <li className="hover:text-blue-600 cursor-pointer">Payments</li>
        <li className="hover:text-blue-600 cursor-pointer">Hostels</li>
        <li className="hover:text-blue-600 cursor-pointer">Analytics</li>
      </ul>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="text-gray-600 hover:text-blue-600 text-xl">
          <FaBell />
        </button>

        {/* Ragging Alert */}
        <button className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-md text-sm font-semibold">
          <MdReportProblem className="text-lg" />
          Ragging Alert
        </button>

        {/* Profile */}
        <button className="text-gray-600 hover:text-blue-600 text-2xl">
          <FaUserCircle />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
                  color: "#1a202c",
                }}
              >
                <i className="bi bi-envelope me-2"></i>Contact
              </Nav.Link>

              <div className="d-flex gap-2 mt-3 mt-lg-0 align-items-center ms-lg-3">
                <Button
                  as={Link}
                  to="/login"
                  onClick={() => setExpanded(false)}
                  className="btn-login"
                >
                  <i className="bi bi-box-arrow-in-right me-2"></i>Login
                </Button>

                <Button
                  as={Link}
                  to="/signup"
                  onClick={() => setExpanded(false)}
                  className="btn-signup"
                >
                  <i className="bi bi-rocket-takeoff me-2 rocket-icon"></i>
                  Sign Up
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
