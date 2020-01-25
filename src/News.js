import React, { Component } from 'react';
class News extends Component {

    render() {
        const people = this.props.data2;
        return (
            <div className="">
                {
                    people.map((p) => {
                        console.log(p)
                        return (
                            <div key={p.id}>
                                <h1>News</h1>
                                <h3 className="char-name">{p.name}</h3>
                                <p>{p.short_description}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}
export default News;