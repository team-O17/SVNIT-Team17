import React, { Component } from 'react'

export default class pp extends Component {
    render() {
        return (
            <div>
                <div class="section no-pad-bot" id="index-banner">
                      <div class="container">
                        <br/>
                        <h1 class="header center orange-text">STOCK SCREENER</h1>
                        <div class="row center">
                          <h5 class="header col s12 light">do your analysis</h5>
                          <br/>
                        </div>
                      </div>  
                </div>

    <div class="row">
      <form action='/predict' method="post" class="col s12">
      <div class="row">
          <div class="input-field col s4">

              <label for="last_name"><b>Dashboard </b></label>
              <br>
              <input id="last_name" name="Search stock" placeholder="Search stock"  type="text" class="validate">

          </div>

      </div>

      <div class="row center">

          <button type="submit" class="btn-large waves-effect waves-light orange">Search</button>
      </div>
    </form>
    </div>

    
  
                
            </div>
        )
    }
}
