/*
 * File: page.tsx
 * Author: Doug Dickens
 * Date: October 27, 2026
 *
 * Description:
 * This is the home page of the app and the only page it has.
 * It takes no props; Next.js shows it inside the root layout, between the Navbar and the Footer.
 * It does no processing of its own, because all of the student data and state live in StudentPortal.
 * The output is the StudentPortal component, which draws the Overview, Students and
 * Add a student sections.
 */

// ---------- Imports ----------
import StudentPortal from "@/components/StudentPortal";

// ---------- Page component ----------
const Home = () => {
  return <StudentPortal />;
};

// ---------- Export ----------
export default Home;
