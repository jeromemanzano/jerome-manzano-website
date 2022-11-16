import gql from 'graphql-tag'

export const SKILLS_QUERY = gql`
  query {
    getAllSkills {
      id
      name
      iconUrl
    }
  }
`

export const COMPANIES_QUERY = gql`
  query {
    getAllCompanies {
      address
      description
      name
      id
      website
    }
  }
`

export const EXPERIENCES_QUERY = gql`
  query {
    getAllExperiences {
      id
      company {
        address
        description
        name
        id
        website
      }
      skills {
        id
        name
        iconUrl
      }
      position
      startDate
      endDate
      roles
    }
  }
`