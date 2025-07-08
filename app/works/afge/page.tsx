import ImageWithText from "@/app/Components/ImageWithText/ImageWithText";

export default function Page() {
    return (
        <div>
            <ImageWithText
                title="AFGE's Old System"
                subTitle="This is the way afge use to run."
                text="AFGE came to me with a challenge. Their existing process involved manually submitting form data and then copying it over to a shared spreadsheet that their entire team accessed. With thousands of cases and many representatives, this approach was becoming unmanageable."
                imageUrl="https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/6660f569933b3a8530b099ee_665e53dfe87858ffe6fcfcf5_2h3uVm8E8d2kEy5u4VDjpiCQcpExiLf8wN_vjoG6C1COhW4G3QT4pJoxAvgxDBLaR7l9TeHsbp9xICx3wJtKY-RqQ_ZTIpIPJWKhbeN24-jSRyfxlFh39HGzuf-rot_JIrzAQ9_Zhqd1RiAjSveljuA.png"
            />

            <div>
                <h3>AFGE’s Manual Case Handling Process</h3>

                <div>
                    <h3>Step 1: User submits a form</h3>
                    <p>Users fill out and submit a case form online or through another channel.</p>
                </div>

                <div>
                    <h3>Step 2: Admin receives the form manually</h3>
                    <p>An admin reviews the incoming form submission from an inbox or system.</p>
                </div>

                <div>
                    <h3>Step 3: Admin manually copies form data</h3>
                    <p>The admin transfers the form data by hand into a shared spreadsheet.</p>
                </div>

                <div>
                    <h3>Step 4: Admin assigns case to a rep</h3>
                    <p>The admin types the rep’s name next to the case or notifies them manually.</p>
                </div>

                <div>
                    <h3>Step 5: Reps access shared spreadsheet</h3>
                    <p>Representatives check the spreadsheet for new assignments and begin work.</p>
                </div>
            </div>

            <div>
                <h3>AFGE’s Automated Case Management Workflow</h3>

                <div>
                    <h3>Step 1: User submits a form online</h3>
                    <p>Users submit their case through a digital form interface.</p>
                </div>

                <div>
                    <h3>Step 2: Form data automatically logged in shared system</h3>
                    <p>The system captures and organizes all submission data instantly.</p>
                </div>

                <div>
                    <h3>Step 3: Case automatically appears in rep dashboard</h3>
                    <p>The system routes or displays new cases directly to reps based on criteria or visibility.</p>
                </div>

                <div>
                    <h3>Step 4: Reps access and manage cases in real time</h3>
                    <p>Reps can immediately view, claim, or manage cases from their interface.</p>
                </div>

                <div>
                    <h3>Step 5: Admins oversee case flow and team performance</h3>
                    <p>Admins monitor overall workflow and adjust assignments only as needed.</p>
                </div>
            </div>

            {/* <h2>AFGE Case Management System</h2>

            <p>
                AFGE came to me with a challenge. Their existing process involved manually submitting form data and then copying it over to a shared spreadsheet that their entire team accessed. With thousands of cases and many representatives, this approach was becoming unmanageable.
            </p>

            <p>
                They needed a system where:
                <ul>
                    <li>Admins could view all submitted cases, assign them to specific representatives, and manage staff accounts.</li>
                    <li>Reps could only view their own assigned cases and update limited fields like "Progress" and "Notes."</li>
                    <li>File uploads could be attached to cases for reps to download later.</li>
                </ul>
            </p>

            <p>
                The solution we built was a custom web application with:
                <ul>
                    <li>An integrated form with real-time validation that stores submissions directly in a database.</li>
                    <li>A secure login system with role-based access control.</li>
                    <li>An admin dashboard where staff can view, add, or remove team members and manage all cases.</li>
                    <li>A representative dashboard limited to their assigned cases with editing access only to allowed fields.</li>
                </ul>
            </p>

            <h3>What AFGE Says:</h3>
            <blockquote>
                "Joel was awesome! This new system is night and day compared to what we were doing."
            </blockquote> */}
        </div>
    );
}
