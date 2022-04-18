import React from 'react';

const Blogs = () => {
    return (
        <div className='m-5 text-center'>
            <h4>Difference between authorization and authentication</h4>
            <p>Authentication means confirming users own identity, while authorization means granting user access to the system. Authentication is done before the authorization process. And authorization process is done after the authentication process. Authentication needs usually user's login details but authorization needs user's privilege or security levels.</p><br />
            <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
            <p>Firebase is a web app development platform. Firebase helps us develop high-quality apps, grow user base, and earn more money. It let us develop the whole app on the front-end without any server-side code. It's easy to start a project with Firebase. <br /> There are some Firebase alternatives: Parse, Back4App, AWS Amplify, Kuzzle, Couchbase, NativeScript, RxDB, Flutter.</p><br />
            <h4>What other services does firebase provide other than authentication?</h4>
            <p>Firebase provides many services, Most useful of them are: Cloud Firestore, Cloud Functions, Authentication, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging, Dynamic Links, Remote Config</p>
        </div>
    );
};

export default Blogs;