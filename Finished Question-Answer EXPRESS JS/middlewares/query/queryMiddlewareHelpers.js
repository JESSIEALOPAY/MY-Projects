const searcHelper = (searchKey, query, req) => {

    if (req.query.search) {
        console.log(req.query.search)
        const searchObject = {}
        const regex = new RegExp(req.query.search, 'i')
        searchObject[searchKey] = regex
        return query.where(searchObject)
    }
    return query

}

const populateHelper = (query, populateOptions) => {
    return query.populate(populateOptions)
}


const questionSortHelper = (query, req) => {
    const sortKey = req.query.sortBy
    if (sortKey == "most-answered") {
        query = query.sort('-answerCount')
    }
    if (sortKey == 'most-liked') {
        query = query.sort('-likeCount')
    }
    return query.sort('-createdAt')
}

const paginationHelper =(query, total, req) => {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 5
    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const paginationObject = {}

    if (startIndex > 0) {
        paginationObject.previous = page - 1
    }
    if (endIndex < total) {
        paginationObject.next = page + 1
    }
    paginationObject.limit = limit


    return {
        query: query == undefined ? undefined : query.skip(startIndex).limit(limit),
        pagination: paginationObject,
        startIndex,
        limit
    }

}


module.exports = { searcHelper, populateHelper, questionSortHelper, paginationHelper }



