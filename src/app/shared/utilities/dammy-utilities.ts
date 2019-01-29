
import { Injectable } from '@angular/core';

export class ValueObject {
  "pre": string;
  "last": string;
  "chgDate": string;
  "modifier": string;
}

export class FirstUtil {
  
  constructor() {
  }

  public static isBlank(val:string): boolean{
    if (val !== null && val !== '' && val !== 'null' && val != 'undefined' && 
      val.replace(/^\s+|\s+$/gm,'') !== '') {
      return false;
    }
    return true;
  }
}

@Injectable()
export class DammyUtilities {
  public static atmData = {
    "RecordId": 8918,
    "RecordUri": 451230,
    "Status": "In Review",
    "Title": "FY19_Jan_AL Tayyar Travel Group Holding Comp_9940000000_V1",
    "SnapAtmGeneralInfo": {
      "GiId": 0,
      "RecordId": 0,
      "CombinationStatus": 0,
      "DecisionTreeStatus": 0,
      "SummaryStatus": 0,
      "OverviewStatus": 0,
      "SegmentStatus": 0,
      "RevenueStatus": 0,
      "ConsiderationStatus": 0,
      "NoAccountingStatus": 0,
      "IsDirty": 0,
      "SAPContractNumber": {
        "pre": "9690000000",
        "last": "9940000000",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "SAPContractName": {
        "pre": "CDL Contract",
        "last": "ATM test Contract",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "MMSIDName": {
        "pre": "",
        "last": "10684846 - EA Extension,10693411 - ERP CR#4 OpenText,10719413 - Retail Space Design,10754356 - Supplier Extranet Portal,10700530 - Al Tayyar Testing,10698842 - Digital Hub,10736705 - Customer Service Implementation",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "EAC": {
        "pre": "",
        "last": "1000.00",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "EACCCIPercent": {
        "pre": "",
        "last": "0.00",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "ContractStartDate": {
        "pre": "",
        "last": "05/12/2018",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "ContractEndDate": {
        "pre": "",
        "last": "10/24/2018",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "CurrentSalesBooking": {
        "pre": "",
        "last": "3500000.00",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "RealCurrentSalesBooking": {
        "pre": "",
        "last": "3500000.00",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "SAPCurrentRevenueBacklog": {
        "pre": "",
        "last": "1000.00",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "CorrectedComments": {
        "pre": "",
        "last": "adfasdfsdfasdfasdfsd",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "CreateDate": {
        "pre": "",
        "last": "01/03/2019",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "UpdateDate": {
        "pre": "",
        "last": "01/24/2019",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "InitialContractSignDate": {
        "pre": "",
        "last": "01/10/2019",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "CombinationCurrentSalesBooking": {
        "pre": "",
        "last": "3500000.00",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "CombinationCurrentRevenueBacklog": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "CFMCDTSApprover": {
        "pre": "",
        "last": "t05129cdldsid002",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "GAAPApprover": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "ATMCreatedBy": {
        "pre": "",
        "last": "t05129cdldsid017",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "ApproveComment": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "RequestForApproveDate": {
        "pre": "",
        "last": "01/01/0001",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "ATMApproveDuedate": {
        "pre": "",
        "last": "01/01/0001",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "ContractTerms": {
        "pre": "",
        "last": "6",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "FiscalYear": {
        "pre": "",
        "last": "2019",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "Month": {
        "pre": "",
        "last": "January",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "SAPMSABacklog": {
        "pre": "0",
        "last": "1000.00",
        "chgDate": "01/24/2019 22:11",
        "modifier": "xuening.zhao"
      },
      "ATMPreparer": {
        "pre": "",
        "last": "t05129cdldsid001",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "ATMAdditionalPreparer": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "NetRevenuePrice": {
        "pre": "210000.00",
        "last": "21005.00",
        "chgDate": "01/24/2019 22:11",
        "modifier": "xuening.zhao"
      },
      "GAAPTeamApproval": {
        "pre": "",
        "last": "true",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "ATMReviewer": {
        "pre": "",
        "last": "T05129cdldsid003",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "ATMAdditionalReviewer": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      }
    },
    "SnapFmOverview": {
      "RecordId": 8918,
      "MSAStructure": {
        "pre": "",
        "last": "Yes",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "SOWs": {
        "pre": "",
        "last": "Yes",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "RightsAndObligations": {
        "pre": "",
        "last": "Yes",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "AdditionalAction": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "Rationale": {
        "pre": "",
        "last": "Document the rationale for \"contracted\" or \"not contracted\"",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "IsStandAloneForOpp": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "CreditRating": {
        "pre": "",
        "last": "99",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "CreditRisksComment": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "MSAComment": {
        "pre": "",
        "last": "Provide a description of the services to be provided",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "ODEComment": {
        "pre": "",
        "last": "See MME and QA Tool for Solution Contingency documentation",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "ODEtoEACComment": {
        "pre": "",
        "last": "Provide a reconciliation of Revenue (ODE) to Sales Booking (EAC)",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "IntroATMType": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "IntroDocumentSectionModify": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "IntroReviewVariableFee": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "IntroRevenueRecognition": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "IntroMoreThanOneDeliverable": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "IntroQuarter": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "IntroPreparerName": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "IntroPreparerDate": {
        "pre": "",
        "last": "01/01/0001",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "IntroExecutiveReviewer": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "IntroExecutiveReviewerDate": {
        "pre": "",
        "last": "01/01/0001",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      }
    },
    "SnapFmSegmentation": {
      "SegId": 4490,
      "RecordId": 8918,
      "MoreThanOneDeliverable": {
        "pre": "",
        "last": "Yes",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "TotalAccountingDeliverables": {
        "pre": "",
        "last": "0",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "D1D2DoesFreeGreateThanUSD": {
        "pre": "",
        "last": "Yes",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "D1D2FreeServiceExistDeliverable": {
        "pre": "",
        "last": "Yes",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "D1D2FreeServiceExistDeliverableNoComments": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "RFVBillingsGraterThanThreshold": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "RFVFeesSatisfySingleDeliverable": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "RFVPassScreenTest": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "RFVRationaleForPassTest": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "RFVRevenueAdjustmentExplain": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "RFVBillingsEqualCTAorPriceModel": {
        "pre": "",
        "last": "Yes",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "RFVReconciliationOfBillings": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "RFVNeedsAdjustment": {
        "pre": "",
        "last": "No",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "RFVPostRevenueAdjustmentExplain": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "RFVPostBillingsEqualCTAorPriceModel": {
        "pre": "",
        "last": "Yes",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "RFVPostReconciliationOfBillings": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "RFVPostNeedsAdjustment": {
        "pre": "",
        "last": "No",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "SnapFmSegAccDeliverable": [{
        "DeliverableId": 9583,
        "SegId": 4490,
        "DeliverableName": {
          "pre": "",
          "last": "name1",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "DeliverableDollarAmount": {
          "pre": "",
          "last": "40000.00",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "TypeOfWork": {
          "pre": "",
          "last": "Applications Outsourcing",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "Segmentable": {
          "pre": "",
          "last": "False",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1Q1SufficientlyDetailed": {
          "pre": "",
          "last": "Yes",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1Q1SufficientlyDetailedText": {
          "pre": "",
          "last": "Test 1: 'Multiple Deliverables Test' - Does the contract have more than one deliverable?",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1Q1SufficientlyDetailedNoSegText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1Q2BenefitCustomer": {
          "pre": "",
          "last": "No",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1Q2BenefitCustomerText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1Q2BenefitCustomerNoSegText": {
          "pre": "",
          "last": "Description of the anticipated deliverables and/or benefits to the customer",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1Q3EstimatedTimeFrame": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1Q3EstimatedTimeFrameText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1Q3EstimatedTimeFrameNoSegText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1QSHasSIOrConsulting": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1QSHasSIOrConsultingText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1QS1DeliveredToCustomerLocation": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1QS1DeliveredToCustomerLocationText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1QS1DeliveredToCustomerLocationNoSegText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1QS2IntellectualPropertyRights": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1QS2IntellectualPropertyRightsText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1QS2IntellectualPropertyRightsNoSegText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1QS3LicensesInCustomerName": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1QS3LicensesInCustomerNameText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1QS3LicensesInCustomerNameNoSegText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2Q1BenefitFromDeliverable": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2Q1BenefitFromDeliverableText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2Q1BenefitFromDeliverableNoSegText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2Q2TransferDeliverables": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2Q2TransferDeliverablesText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2Q2TransferDeliverablesNoSegText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2QSHasSIAndHostingServices": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2QSHasSIAndHostingServicesText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2QS1CalledOutHostingServices": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2QS1CalledOutHostingServicesText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2QS1CalledOutHostingServicesNoSegText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2QS2CancelHostingServices": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2QS2CancelHostingServicesText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2QS2CancelHostingServicesNoSegText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2QS3RunSoftware": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2QS3RunSoftwareText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2QS3RunSoftwareNoSegText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "ContractedStatus": {
          "pre": "",
          "last": "Contracted",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "D1D2BeginDate": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "D1D2EndDate": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "D1D2BillingMargin": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "D1D2FareValueMargin": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "D1D2DescribleStreamInvoicePayments": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "D1D2HasTransitionFeeOfDeliverable": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "D1D2TransitionFeeGreaterThanUSD": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "D1D2VariableFeesCountOfDeliverable": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "D1D2DoesResaleWithPolicy": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "D1D2DescribleFreeService": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "D1D2DeliverableStatus": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "IsRepresentRecurringService": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "TotalCosts": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "PostTotalCosts": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "Billings": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "PostBillings": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "Criteria": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "OnlyDesignContracted": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "DeliveryOccurredComments": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "FixedOrDeterminableFeeComments": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "DetermineTheTimingDifference": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "GCTByDate": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "GCTDoesRepresentRecurring": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "GCTSectionA_EnterEventOfTermination": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "GCTSectionA_DoesIncludePeriod": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "GCTSectionA_EnterTerminateConvenience": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "GCTSectionA_DoesCompletedToDate": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "GCTSectionA_AdditionalDocumentation": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "GCTSectionB_TotalTerminationFees": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "GCTSectionB_TotalContractBillings": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "GCTSectionB_AdditionalDocumentation": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "GCTSectionC_AdditionalDocumentation": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "RevenueOptionComments": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "SnapFmAccDeliverableFixedFees": []
      }, {
        "DeliverableId": 9584,
        "SegId": 4490,
        "DeliverableName": {
          "pre": "",
          "last": "name2",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "DeliverableDollarAmount": {
          "pre": "",
          "last": "5000.00",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "TypeOfWork": {
          "pre": "",
          "last": "Undefined Free Services",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "Segmentable": {
          "pre": "",
          "last": "True",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1Q1SufficientlyDetailed": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1Q1SufficientlyDetailedText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1Q1SufficientlyDetailedNoSegText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1Q2BenefitCustomer": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1Q2BenefitCustomerText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1Q2BenefitCustomerNoSegText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1Q3EstimatedTimeFrame": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1Q3EstimatedTimeFrameText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1Q3EstimatedTimeFrameNoSegText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1QSHasSIOrConsulting": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1QSHasSIOrConsultingText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1QS1DeliveredToCustomerLocation": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1QS1DeliveredToCustomerLocationText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1QS1DeliveredToCustomerLocationNoSegText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1QS2IntellectualPropertyRights": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1QS2IntellectualPropertyRightsText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1QS2IntellectualPropertyRightsNoSegText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1QS3LicensesInCustomerName": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1QS3LicensesInCustomerNameText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T1QS3LicensesInCustomerNameNoSegText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2Q1BenefitFromDeliverable": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2Q1BenefitFromDeliverableText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2Q1BenefitFromDeliverableNoSegText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2Q2TransferDeliverables": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2Q2TransferDeliverablesText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2Q2TransferDeliverablesNoSegText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2QSHasSIAndHostingServices": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2QSHasSIAndHostingServicesText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2QS1CalledOutHostingServices": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2QS1CalledOutHostingServicesText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2QS1CalledOutHostingServicesNoSegText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2QS2CancelHostingServices": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2QS2CancelHostingServicesText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2QS2CancelHostingServicesNoSegText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2QS3RunSoftware": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2QS3RunSoftwareText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "T2QS3RunSoftwareNoSegText": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "ContractedStatus": {
          "pre": "",
          "last": "Contracted",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "D1D2BeginDate": {
          "pre": "",
          "last": "01/01/2019",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "D1D2EndDate": {
          "pre": "",
          "last": "02/01/2019",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "D1D2BillingMargin": {
          "pre": "",
          "last": "100.00",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "D1D2FareValueMargin": {
          "pre": "",
          "last": "100.00",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "D1D2DescribleStreamInvoicePayments": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "D1D2HasTransitionFeeOfDeliverable": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "D1D2TransitionFeeGreaterThanUSD": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "D1D2VariableFeesCountOfDeliverable": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "D1D2DoesResaleWithPolicy": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "D1D2DescribleFreeService": {
          "pre": "",
          "last": "Describe free services",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "D1D2DeliverableStatus": {
          "pre": "",
          "last": "1",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "IsRepresentRecurringService": {
          "pre": "",
          "last": "Yes",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "TotalCosts": {
          "pre": "",
          "last": "8000.00",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "PostTotalCosts": {
          "pre": "8000.00",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "Billings": {
          "pre": "",
          "last": "8000.00",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "PostBillings": {
          "pre": "8000.00",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "Criteria": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "OnlyDesignContracted": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "DeliveryOccurredComments": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "FixedOrDeterminableFeeComments": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "DetermineTheTimingDifference": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "GCTByDate": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "GCTDoesRepresentRecurring": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "GCTSectionA_EnterEventOfTermination": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "GCTSectionA_DoesIncludePeriod": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "GCTSectionA_EnterTerminateConvenience": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "GCTSectionA_DoesCompletedToDate": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "GCTSectionA_AdditionalDocumentation": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "GCTSectionB_TotalTerminationFees": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "GCTSectionB_TotalContractBillings": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "GCTSectionB_AdditionalDocumentation": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "GCTSectionC_AdditionalDocumentation": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "RevenueOptionComments": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "SnapFmAccDeliverableFixedFees": []
      }],
      "SnapFmSegVariableFees": [],
      "SnapFmSegConsultingReimb": [{
        "ConsultingReimbId": 7700,
        "SegId": 4490,
        "DeliverableName": {
          "pre": "",
          "last": "Undefined Free Services Reimb.",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "TotalCosts": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        },
        "Billings": {
          "pre": "",
          "last": "",
          "chgDate": "01/24/2019 22:10",
          "modifier": ""
        }
      }],
      "SnapFmSegmentationADChangeList": [],
      "SnapFmSegmentationSegChangeList": [],
      "SnapFmSegVariableFeesChangeList": []
    },
    "SnapFmOtherConsiderations": {
      "OtherConsiderationsId": 4495,
      "RecordId": 8918,
      "OctOtherConsiderationStatus": 0,
      "OctCostStatus": 0,
      "OctEmbeddedDerivativesStatus": 0,
      "OctTerminationProvisionsStatus": 0,
      "OctOrganizationStructureStatus": 0,
      "OctOngoingAccountingStatus": 0,
      "OC13_1DoesHavePolicy45Guarantees": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_2DescribePolicy45Guarantees": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_2IsOver10M": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_4DoesContainForeignCurrencyClause": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_5ExplainContractedArrangement": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_7IsThanFunctionalCurrency": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_8ExplainContractedArrangementAndConsult": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_10DescriptionOfPersonnelPerforming": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_12AnyBenchmarkingProvisions": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_13ExplainContractedArrangement": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_15AnyRenegotiationTriggers": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_16ExplainContractedArrangement": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_18AnyOptionPeriods": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_19ExplainContractedArrangement": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_24AreThereUnamortizedTransitionBillings": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_25ExplainAccountingTreatment": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_27SalesIncentives": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_29DescribeSalesIncentive": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_31IntentTheUpfrontPayment": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_32DoesHaveGeneralTerminationProtection": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_35AmortizedIncentiveAmount": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_35AmortizedIncentivePeriod": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_21AnyOtherUniquePricingStructure": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_22ExplainContractedArrangement": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_37DoesAccentureReceivePayment": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_39DoesHaveFollowingExceptions": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_40DocumentException": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_42DescribeAccountingTreatment": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OCQ11_DoesHaveCOLAClause": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OCQ11_TextareaDescribe": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OCQ12_DoesIncludeJointVentures": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OCQ12_TextareaDescribe": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OCQ13_IsNeedsPolicy1227Approved": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OCQ13_DescribeAccountingImplications": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OCQ13_PeakCapitalBalance": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OCQ13_Month": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OCQ1IsFinished": {
        "pre": "false",
        "last": "false",
        "chgDate": "01/24/2019 22:10",
        "modifier": "xuening.zhao"
      },
      "OCQ2IsFinished": {
        "pre": "false",
        "last": "false",
        "chgDate": "01/24/2019 22:10",
        "modifier": "xuening.zhao"
      },
      "OCQ3IsFinished": {
        "pre": "false",
        "last": "false",
        "chgDate": "01/24/2019 22:10",
        "modifier": "xuening.zhao"
      },
      "OCQ4IsFinished": {
        "pre": "false",
        "last": "false",
        "chgDate": "01/24/2019 22:10",
        "modifier": "xuening.zhao"
      },
      "OCQ5IsFinished": {
        "pre": "false",
        "last": "false",
        "chgDate": "01/24/2019 22:10",
        "modifier": "xuening.zhao"
      },
      "OCQ6IsFinished": {
        "pre": "false",
        "last": "false",
        "chgDate": "01/24/2019 22:10",
        "modifier": "xuening.zhao"
      },
      "OCQ7IsFinished": {
        "pre": "false",
        "last": "false",
        "chgDate": "01/24/2019 22:10",
        "modifier": "xuening.zhao"
      },
      "OCQ8IsFinished": {
        "pre": "false",
        "last": "false",
        "chgDate": "01/24/2019 22:10",
        "modifier": "xuening.zhao"
      },
      "OCQ9IsFinished": {
        "pre": "false",
        "last": "false",
        "chgDate": "01/24/2019 22:10",
        "modifier": "xuening.zhao"
      },
      "OCQ10IsFinished": {
        "pre": "false",
        "last": "false",
        "chgDate": "01/24/2019 22:10",
        "modifier": "xuening.zhao"
      },
      "OCQ11IsFinished": {
        "pre": "false",
        "last": "false",
        "chgDate": "01/24/2019 22:10",
        "modifier": "xuening.zhao"
      },
      "OCQ12IsFinished": {
        "pre": "false",
        "last": "false",
        "chgDate": "01/24/2019 22:10",
        "modifier": "xuening.zhao"
      },
      "OCQ13IsFinished": {
        "pre": "false",
        "last": "false",
        "chgDate": "01/24/2019 22:10",
        "modifier": "xuening.zhao"
      },
      "OC13_44IsFinished": {
        "pre": "false",
        "last": "false",
        "chgDate": "01/24/2019 22:10",
        "modifier": "xuening.zhao"
      },
      "OC13_44Sub45IsUnamortizedBalanceEstablished": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_44Sub47AccountingComments": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_44Sub49ExplainAccountingTreatment": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_51IsFinished": {
        "pre": "false",
        "last": "false",
        "chgDate": "01/24/2019 22:10",
        "modifier": "xuening.zhao"
      },
      "OC13_51Sub59TransitionCosts": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_66IsFinished": {
        "pre": "false",
        "last": "false",
        "chgDate": "01/24/2019 22:10",
        "modifier": "xuening.zhao"
      },
      "OC13_66Sub68IsReimbursementCostsRelated": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_66Sub69EstimatedCostsDetail": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_73IsFinished": {
        "pre": "false",
        "last": "false",
        "chgDate": "01/24/2019 22:10",
        "modifier": "xuening.zhao"
      },
      "OC13_85IsFinished": {
        "pre": "false",
        "last": "false",
        "chgDate": "01/24/2019 22:10",
        "modifier": "xuening.zhao"
      },
      "OC13_85Sub86IsAssetsGreaterThanOneMillion": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_85Sub90IsExplicitlySpecifiedArrangement": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_85Sub91IsPerformObligationThroughAlternativeAssets": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_85Sub92ExplainContractOrArrangement": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_85Sub94IsUtilizeNotUnspecifiedAssets": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_85Sub95IsUseOtherAssetsToFufillObligation": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_85Sub96ExplainUseOfSpecificAssets": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_85Sub97IsPurchaserControlsAssets": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_85Sub98IsPurchaserOperatesAssetsDailyBasis": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_85Sub99IsPurchaserHasAbilityControlPhysicalAccessAssets": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_85Sub100PricingNotBasedOnUsageOrConsumptionIncludeOption": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_85Sub101ExplainPurchaserControlVendorOwnedOrLeasedAssets": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_85Sub105IsAssetTransferOwnershipEndOfLeaseTerm": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_85Sub106IsLeaseContainsBargainPurchaseOption": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_85Sub107IsEqualOrMoreThanSeventyFivePercentEconomicLife": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_85Sub108IsMinimumPaymentsMoreThanNineTyPercentLeased": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_85Sub109ExplainContractLanguageAffirmative": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_114IsFinished": {
        "pre": "false",
        "last": "false",
        "chgDate": "01/24/2019 22:10",
        "modifier": "xuening.zhao"
      },
      "OC13_114Sub115AccountingTreatment": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_117IsFinished": {
        "pre": "false",
        "last": "false",
        "chgDate": "01/24/2019 22:10",
        "modifier": "xuening.zhao"
      },
      "OC13_117Sub118AccountingTreatment": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_120IsFinished": {
        "pre": "false",
        "last": "false",
        "chgDate": "01/24/2019 22:10",
        "modifier": "xuening.zhao"
      },
      "OC13_120Sub121AccountingTreatment": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_123IsFinished": {
        "pre": "false",
        "last": "false",
        "chgDate": "01/24/2019 22:10",
        "modifier": "xuening.zhao"
      },
      "OC13_123Sub124AccountingTreatment": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_126IsFinished": {
        "pre": "false",
        "last": "false",
        "chgDate": "01/24/2019 22:10",
        "modifier": "xuening.zhao"
      },
      "OC13_126Sub127AccountingTreatment": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_129IsFinished": {
        "pre": "false",
        "last": "false",
        "chgDate": "01/24/2019 22:10",
        "modifier": "xuening.zhao"
      },
      "OC13_129Sub130AccountingTreatment": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_132IsFinished": {
        "pre": "false",
        "last": "false",
        "chgDate": "01/24/2019 22:10",
        "modifier": "xuening.zhao"
      },
      "OC13_132Sub133AccountingTreatment": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OC13_138IsFinished": {
        "pre": "false",
        "last": "false",
        "chgDate": "01/24/2019 22:10",
        "modifier": "xuening.zhao"
      },
      "OC13_138Sub139AccountingTreatment": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "IsDirty": 0,
      "SnapFmOtherCdtSubContractors": [],
      "TP14_1TerminateForConvenience": {
        "pre": "",
        "last": "Yes",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "TP14_2SummaryTerminateForConvenience": {
        "pre": "",
        "last": "Provide summary of Accenture's right to terminate for convenience",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "TP14_3ClientTerminateForConvenience": {
        "pre": "",
        "last": "Yes",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "TP14_4ClientCannotTerminateForConvenience": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "TP14_5ClientTerminateBegin": {
        "pre": "",
        "last": "When does the Client right to terminate begin (i.e. first anniversary of effective date?)",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "TP14_6NoticePeriod": {
        "pre": "",
        "last": "What is the notice period?",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "TP14_7ContractPolicy": {
        "pre": "",
        "last": "Yes",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "TP14_17PocketCosts": {
        "pre": "",
        "last": "Included in T4C Charge",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "TP14_18ExplanationAccounting": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "TP14_20ProvideRecovery": {
        "pre": "",
        "last": "Yes",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "TP14_21ContractualProvisionExplanation": {
        "pre": "",
        "last": "Provide explanation of contractual provisions",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "TP14_23BreakFees": {
        "pre": "",
        "last": "Yes - Break Fees",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "TP14_24NoneBreakFees": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "TP14_26OtherTermination": {
        "pre": "",
        "last": "Provide any other details regarding Client Termination for convenience that are not addressed above.",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "TP14_31BriefDescription": {
        "pre": "",
        "last": "Provide a brief description of the other Termination Rights included in the contract (i.e. breach/cause, change in control, change in law, insolvency). Be sure to highlight any unusual termination rights",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "TP14_33MiniSpendCommitment": {
        "pre": "",
        "last": "Yes",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "TP14_34ContractualProvisions": {
        "pre": "",
        "last": "Provide explanation of contractual provisions",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "SnapFmOtherCdtTerminTable": {
        "SnapDemobilization": {
          "TP14_DemobilizationYr1": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_DemobilizationYr2": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_DemobilizationYr3": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_DemobilizationYr4": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_DemobilizationYr5": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_DemobilizationYr6": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_DemobilizationYr7": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_DemobilizationYr8": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_DemobilizationYr9": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_DemobilizationYr10": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          }
        },
        "SnapUnrecoveredBalSheetItems": {
          "TP14_UnrecoveredBalSheetItemsYr1": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_UnrecoveredBalSheetItemsYr2": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_UnrecoveredBalSheetItemsYr3": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_UnrecoveredBalSheetItemsYr4": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_UnrecoveredBalSheetItemsYr5": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_UnrecoveredBalSheetItemsYr6": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_UnrecoveredBalSheetItemsYr7": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_UnrecoveredBalSheetItemsYr8": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_UnrecoveredBalSheetItemsYr9": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_UnrecoveredBalSheetItemsYr10": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          }
        },
        "SnapSalesIncentive": {
          "TP14_SalesIncentiveYr1": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_SalesIncentiveYr2": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_SalesIncentiveYr3": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_SalesIncentiveYr4": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_SalesIncentiveYr5": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_SalesIncentiveYr6": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_SalesIncentiveYr7": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_SalesIncentiveYr8": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_SalesIncentiveYr9": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_SalesIncentiveYr10": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          }
        },
        "SnapDeferredMargintoDate": {
          "TP14_DeferredMargintoDateYr1": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_DeferredMargintoDateYr2": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_DeferredMargintoDateYr3": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_DeferredMargintoDateYr4": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_DeferredMargintoDateYr5": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_DeferredMargintoDateYr6": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_DeferredMargintoDateYr7": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_DeferredMargintoDateYr8": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_DeferredMargintoDateYr9": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_DeferredMargintoDateYr10": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          }
        },
        "SnapBreakFeePenalty": {
          "TP14_BreakFeePenaltyYr1": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_BreakFeePenaltyYr2": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_BreakFeePenaltyYr3": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_BreakFeePenaltyYr4": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_BreakFeePenaltyYr5": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_BreakFeePenaltyYr6": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_BreakFeePenaltyYr7": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_BreakFeePenaltyYr8": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_BreakFeePenaltyYr9": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_BreakFeePenaltyYr10": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          }
        },
        "SnapOther": {
          "TP14_OtherYr1": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_OtherYr2": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_OtherYr3": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_OtherYr4": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_OtherYr5": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_OtherYr6": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_OtherYr7": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_OtherYr8": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_OtherYr9": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          },
          "TP14_OtherYr10": {
            "pre": "",
            "last": "",
            "chgDate": "01/24/2019 22:10",
            "modifier": ""
          }
        }
      },
      "SnapFmOtherCdOngoingAccountingConsiderations": [],
      "TotalDerivativeNotionalAmount": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "SnapFmOtherCdtEmbeddedDerivatives": [],
      "SnapFmOtherCdtEmbeddedDerivativesChangeList": [],
      "SnapFmOtherCdOngoingAccountingConsiderationsChangeList": [],
      "SnapFmOtherCdtSubContractorsChangeList": []
    },
    "SnapFmNonAccountingSections": {
      "NonAccountingSectionsId": 8568,
      "RecordID": 8918,
      "IsDirty": 0,
      "FinancialBuildupTabStatus": 0,
      "KeyDealResourcesTabStatus": 0,
      "GlobalClientAccountLeadUser1": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "GlobalClientAccountLeadUser2": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "GlobalClientAccountLeadUser3": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "SalesCaptureOriginationLeadUser1": {
        "pre": "",
        "last": "kourosh.dara",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "SalesCaptureOriginationLeadUser2": {
        "pre": "",
        "last": "massimo.cannizzo",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "SalesCaptureOriginationLeadUser3": {
        "pre": "",
        "last": "david.fregonas",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "SolutionArchitectUser1": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "SolutionArchitectUser2": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "SolutionArchitectUser3": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "DeliveryLeadUser1": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "DeliveryLeadUser2": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "DeliveryLeadUser3": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "CDTSUser1": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "CDTSUser2": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "CDTSUser3": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "CFMUser1": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "CFMUser2": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "CFMUser3": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "CorporateControllershipUser1": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "CorporateControllershipUser2": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "CorporateControllershipUser3": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "TaxUser1": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "TaxUser2": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "TaxUser3": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "LegalUser1": {
        "pre": "",
        "last": "varsha.s.saha",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "LegalUser2": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "LegalUser3": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "QAUser1": {
        "pre": "",
        "last": "eric.khafagy",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "QAUser2": {
        "pre": "",
        "last": "mohamed.abubacker",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "QAUser3": {
        "pre": "",
        "last": "mohamed.s.baffoun",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OtherUser1": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OtherUser2": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OtherUser3": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "AttachmentsTabStatus": 0,
      "SnapFmNonActAttachment": [],
      "ApprovalsTabStatus": 0,
      "DualReportingTabStatus": 0,
      "VariableFees_Conclusion": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "VariableFees_ActionRequired": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "VariableFees_CommentRequired": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "RFV_ActionRequired": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "RFV_Conclusion": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "RFV_DifferenceRFVAllocation": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "RFV_PassScreenTest": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "RFV_606": {
        "pre": "",
        "last": "No",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "RFV_605": {
        "pre": "",
        "last": "No",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "Other1_IsFinished": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "Other_MaterialRightOrOption": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "Other2_IsFinished": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "Other_ApplicationDevelopmentWork": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "Other3_IsFinished": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "Other_TransitionCostsWithConsultingWork": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "Other4_IsFinished": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "Other_DeferredTransformationCosts": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "Other5_IsFinished": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "Other_DueToVSOE": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "Other6_IsFinished": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "Other_AnyOtherItems": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "Other_IsAnyOfAboveItem": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "Conclusion_VariableFees": {
        "pre": "",
        "last": "No",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "Conclusion_RFV": {
        "pre": "",
        "last": "No",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "Conclusion_Criteria1": {
        "pre": "",
        "last": "No",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "Conclusion_CriteriaPOC": {
        "pre": "",
        "last": "No",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "Conclusion_Criteria3": {
        "pre": "",
        "last": "No",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "Conclusion_Other": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "Conclusion_Comments": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "Conclusion_IsRequired": {
        "pre": "",
        "last": "No",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "DeliverableName": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "TypeOfWork": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "Criteria": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "TimeStamp": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "OnlyDesignContracted": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "DeliveryOccurredComments": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "FixedOrDeterminableFeeComments": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "DetermineTheTimingDifference": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "RevenueOptionComments": {
        "pre": "",
        "last": "",
        "chgDate": "01/24/2019 22:10",
        "modifier": ""
      },
      "SnapFmNonActSubRevenueRecognition": [],
      "SnapFmFinancialBuildupDetial": [],
      "SnapFmFinancialBuildupDetialChangeList": [],
      "SnapFmNonActAttachmentChangeList": []
    },
    "SnapFmRevenueRecognition": []
  }
  constructor() { }
}