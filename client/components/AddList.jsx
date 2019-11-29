import React from 'react';
import { useMutation } from 'urql';
import gql from 'graphql-tag';


const createList = gql`
  mutation createList($title: String!) {
    createList(title: $title) {
      id
      title
    }
  }
`;

const FirstComponent = () => {

    const [res, executeMutation] = useMutation(createList);

    if (res.error) {
        return 'oh no, this is infinity -> ...';
    }
    else {
        return (
            <div>
                <button onClick={() => executeMutation({ title: 'something new here!' })}>
                    Add list!
                </button>
            </div>
        );
    }
};


export default FirstComponent;