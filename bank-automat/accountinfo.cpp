#include "accountinfo.h"
#include "ui_accountinfo.h"

accountInfo::accountInfo(QWidget *parent)
    : QDialog(parent)
    , ui(new Ui::accountInfo)
{
    ui->setupUi(this);
}

accountInfo::~accountInfo()
{
    delete ui;
}

void accountInfo::setBalance(const QString &newBalance)
{
    balance = newBalance;
    ui -> labelBalance -> setText(balance);
}
