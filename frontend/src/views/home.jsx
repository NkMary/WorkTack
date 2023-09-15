const React = require('react')
const Def = require ('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>WorkTack</h1>
                <div>
                    <img src="/images/corkboard.jpg" alt="blank corkboard" />
                    <div>
                    Photo by <a href="https://unsplash.com/@sibilant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Josephine Bredehoft</a> on <a href="https://unsplash.com/photos/KsAo8ouBn8A?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = home 

