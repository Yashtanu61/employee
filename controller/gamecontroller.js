var mongoose = require('mongoose');
var employee = mongoose.model('employee');

exports.processRequest = function(req, res) {

    if (req.body.result.action == "email") {
        getemployeeemail(req,res)
      }
      else if (req.body.result.action == "address")
      {
          getemployeeaddress(req,res)
      }
      else if (req.body.result.action == "project")
      {
          getemployeeproject(req,res)
      }
     else if (req.body.result.action == "dateofjoining")
      {
          getemployeejoining(req,res)
      }
    };
    function getemployeeemail(req,res)
    {
    
    let employeeToSearch = req.body.result && req.body.result.parameters && req.body.result.parameters.employee ? req.body.result.parameters.employee : 'Unknown';
    
    employee.findOne({name:employeeToSearch},function(err,employeeExists)
          {
            if (err)
            {
              return res.json({
                  speech: 'Something went wrong!',
                  displayText: 'Something went wrong!',
                  source: 'employee'
              });
            }
    
    if (employeeExists)
            {
              return res.json({
                    speech: employeeExists.email,
                    displayText: employeeExists.email,
                    source: 'employee'
                });
            }
            else {
              return res.json({
                    speech: 'Currently I am not having information about this employee',
                    displayText: 'Currently I am not having information about this employee',
                    source: 'employee'
                });
            }
          });
    }
    function getemployeeaddress(req,res)
    {
    
    let employeeToSearch = req.body.result && req.body.result.parameters && req.body.result.parameters.employee? req.body.result.parameters.employee : 'Unknown';
    
    employee.findOne({name:employeeToSearch},function(err,employeeExists)
          {
            if (err)
            {
              return res.json({
                  speech: 'Something went wrong!',
                  displayText: 'Something went wrong!',
                  source: 'employee'
              });
            }
    
    if (employeeExists)
            {
              return res.json({
                    speech: employeeExists.address,
                    displayText: employeeExists.address,
                    source: 'employee'
                });
            }
            else {
              return res.json({
                    speech: 'Currently I am not having information about this employee',
                    displayText: 'Currently I am not having information about this employee',
                    source: 'employee'
                });
            }
          });
    }
    function getemployeeproject(req,res)
    {
    
    let employeeToSearch = req.body.result && req.body.result.parameters && req.body.result.parameters.employee? req.body.result.parameters.employee : 'Unknown';
    
    employee.findOne({name:employeeToSearch},function(err,employeeExists)
          {
            if (err)
            {
              return res.json({
                  speech: 'Something went wrong!',
                  displayText: 'Something went wrong!',
                  source: 'employee'
              });
            }
    
    if (employeeExists)
            {
              return res.json({
                    speech: employeeExists.project,
                    displayText: employeeExists.project,
                    source: 'employee'
                });
            }
            else {
              return res.json({
                    speech: 'Currently I am not having information about this employee',
                    displayText: 'Currently I am not having information about this employee',
                    source: 'employee'
                });
            }
          });
    }
    
    
    
    
    
    