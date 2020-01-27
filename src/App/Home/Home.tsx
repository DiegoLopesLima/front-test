import React, { FC, createRef, useState, useEffect } from 'react';

const
  Home: FC = () => {
    const
      getUserName = () => localStorage.getItem('@userName'),
      [ userName, setUsername ] = useState(getUserName() || 'Convidado'),
      [ message, setMessage ] = useState(),
      controlNameRef = createRef<any>(),
      handleSubmit = event => {
        event.preventDefault();

        setUsername(controlNameRef.current.value);
      };

    useEffect(() => {
      if (userName && userName !== 'Convidado' && getUserName() !== userName) {
        localStorage.setItem('@userName', userName);

        controlNameRef.current.value = '';

        setMessage('Nome de usuário alterado.');
      }
    }, [ userName ]);

    return (
      <div className='min-vh-100 bg-primary'>
        <div className='row justify-content-center py-3'>
          <div className='col-6'>
            <form onSubmit={handleSubmit} className='mb-3'>
              <div className='form-group'>
                <label htmlFor='controlName'>Nome</label>

                <input
                  type='text'
                  id='controlName'
                  ref={controlNameRef}
                  className='form-control'
                  placeholder='Digite seu nome'
                />
              </div>

              <button
                type='submit'
                className='btn btn-light'
              >Salvar</button>
            </form>

            {message && (
              <div className="alert alert-info">{message}</div>
            )}
          </div>
        </div>
      </div>
    )
  };

export default Home;
