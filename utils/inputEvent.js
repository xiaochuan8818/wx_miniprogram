module.exports = {

  inputgetName(e,_this) {

    let name = e.currentTarget.dataset.name;

    let nameMap = {}

    if (name.indexOf('.')) {

      let nameList = name.split('.')

      if (this.data[nameList[0]]) {

        nameMap[nameList[0]] = _this.data[nameList[0]]

      } else {

        nameMap[nameList[0]] = {}

      }

      nameMap[nameList[0]][nameList[1]] = e.detail.value

    } else {

      nameMap[name] = e.detail.value

    }

    console.log(nameMap)

    _this.setData(nameMap)

  }

}
