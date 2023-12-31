import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TraderStateTableProps } from "../../../types/TraderTypes";

interface StyledStatusProps {
  status: string;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("ko-KR"); // 한국어 날짜 포맷으로 변경 ('yyyy-mm-dd')
};

const getStatusKorean = (status: string) => {
  switch (status) {
    case "PREPARING":
      return "거래예정";
    case "WAITING":
      return "서명대기중";
    case "COMPLETION":
      return "거래완료";
    case "REFUSAL":
      return "거절된문서";
    default:
      return status; // 만약 다른 상태가 있다면 그대로 반환
  }
};

const TraderStateTable: React.FC<TraderStateTableProps> = ({
  selectedRole,
  statementList,
}) => {
  const navigate = useNavigate();

  // 클릭 핸들러 함수
  const handleClick = (status: string, statementSeq: number) => {
    if (status === "REFUSAL") {
      toast.error("거절된 문서입니다.");
    } else {
      navigate(`/m/sign/${statementSeq}`); // Use navigate instead of window.location.href
    }
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <StyledTable>
        <thead>
          <tr>
            <th>분류</th>
            <th>상태</th>
            <th>거래명세서</th>
          </tr>
        </thead>
        <tbody>
          {statementList.map((item) => (
            <StyledRow
              key={item.statementSeq}
              onClick={() =>
                handleClick(item.statementStatus, item.statementSeq)
              }
            >
              <td>
                {item.reqORres === 0
                  ? "수급"
                  : item.reqORres === 1
                  ? "공급"
                  : ""}
              </td>
              <StyledStatus status={item.statementStatus}>
                {getStatusKorean(item.statementStatus)}
              </StyledStatus>
              <td>{`${
                item.branchName.length > 11
                  ? item.branchName.substring(0, 11) + "..."
                  : item.branchName
              }\n${item.productName}\n${formatDate(item.tradeDate)}`}</td>
            </StyledRow>
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
};

export default TraderStateTable;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 8px 12px;
    text-align: left;
    border-bottom: 1px solid gray;
    white-space: pre-line;
  }

  th {
    background-color: #eaeaea;
    border-bottom: 2px solid black;
  }
`;

const StyledStatus = styled.td<StyledStatusProps>`
  font-weight: bold;
  color: ${(props) => {
    const statusKorean = getStatusKorean(props.status);
    switch (statusKorean) {
      case "거래예정":
        return "orange";
      case "거래완료":
        return "green";
      case "거절된문서":
        return "red";
      case "서명대기중":
        return "blue";
      default:
        return "black";
    }
  }};
`;

const StyledRow = styled.tr`
  cursor: pointer;
`;
