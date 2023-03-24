'use strict'

module.exports.hello = async (event) => {
  console.log('Event: ', event)
//   console.log('Context: ', context)
  
  return {
      statusCode: 200,
      body: JSON.stringify(
          {
              message: 'Hello Sbalnkson handler!',
              event: event
          },
      )
      
  }
};
