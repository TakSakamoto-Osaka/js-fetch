const btn = document.getElementById('btn');

btn.addEventListener('click', funcTest);

function funcTest()
{
    // console.log( argTest( 1, 4 ) );
    // console.log( paramFunc( argTest, 1, 5 ) );

    // console.log( ( ( func, a, b, ) => {
    //     return ( func( a, b ))
    // })( argTest, 1, 6 ) );

    data = 1;

    //asyncFunc2( data );

    //  多段コールバック
    // asyncFunc2( data, ( val ) => {
    //     console.log( val );
    //     asyncFunc2( val, ( val2 ) => {
    //        console.log( val2 ); 
    //        asyncFunc2( val2, ( val3 ) => {
    //          console.log( val3 );
    //        });
    //     });
    // } )

    // asyncFunc2( 1, ( data, ( val ) => {
    //     console.log( val );
    // } ) );

    // asyncFunc2( 2, ( data, ( val2 ) => {
    //     console.log( val2 );
    // } ) );

    // asyncFunc2( 4, ( data, ( val3 ) => {
    //     console.log( val3 );
    // } ) );

    // setTimeout( () => {
    //     console.log( data * 2 );
    // }, Math.random() * 1000 )
}

const asyncFunc2 = ( data, func ) =>
{
    setTimeout( () => {
        func( data * 2 );
    }, Math.random() * 1000 )
}

// const asyncFunc2 = ( data ) =>
// {
//     setTimeout( () => {
//         console.log( data * 2 );
//     }, Math.random() * 1000 )
// }

// function argTest( a, b )
// {
//     return ( a + b );
// }

// const argTest = function ( a, b )
// {
//     return ( a + b )
// }

// const argTest = ( a, b ) =>
// {
//     return ( a + b )
// }

// function paramFunc( func, a, b )
// {
//     return ( func( a, b ) )
// }

//  アロー関数
//  関数を引数で渡す